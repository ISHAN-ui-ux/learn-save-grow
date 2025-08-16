import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, BookOpen, Home, CheckCircle, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface LessonSlidesProps {
  lessonId: string;
  lessonData: any;
  categoryTitle?: string;
  categoryId?: number;
  totalLessons?: number;
  currentLessonIndex?: number;
}

interface Slide {
  type: 'content' | 'quiz';
  title: string;
  content?: string;
  quiz?: {
    questions: Array<{
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    }>;
  };
}

export const LessonSlides = ({ lessonId, lessonData, categoryTitle, categoryId, totalLessons, currentLessonIndex }: LessonSlidesProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load completed lessons from localStorage
    const completed = localStorage.getItem('completedLessons');
    if (completed) {
      setCompletedLessons(new Set(JSON.parse(completed)));
    }
  }, []);

  useEffect(() => {
    // Generate slides structure from content sections and insert quizzes
    const generatedSlides: Slide[] = [];
    
    // Split lesson content into sections (assuming it's structured with headers)
    const contentSections = lessonData.content.split(/(?=##)/g).filter(section => section.trim());
    
    contentSections.forEach((section, index) => {
      // Extract title from the section header or use a default
      const titleMatch = section.match(/^## (.+)/);
      const title = titleMatch ? titleMatch[1] : `${lessonData.title} - Part ${index + 1}`;
      
      generatedSlides.push({
        type: 'content',
        title: title,
        content: section
      });
      
      // Insert quiz after slide 5 and slide 10
      if ((index === 4 || index === 9) && lessonData.quizzes) {
        const quiz = lessonData.quizzes.find((q: any) => q.position === index + 1);
        if (quiz) {
          generatedSlides.push({
            type: 'quiz',
            title: index === 4 ? 'Mid-Lesson Quiz (5 Questions)' : 'Final Quiz (10 Questions)',
            quiz: {
              questions: quiz.questions
            }
          });
        }
      }
    });
    
    setSlides(generatedSlides);
  }, [lessonData]);


  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      // Reset quiz state when moving to a new slide
      setQuizAnswers({});
      setQuizResults({});
      setShowQuizResults(false);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      // Reset quiz state when moving to a previous slide
      setQuizAnswers({});
      setQuizResults({});
      setShowQuizResults(false);
    }
  };


  const getProgressPercentage = () => {
    return ((currentSlide + 1) / slides.length) * 100;
  };

  const handleQuizSubmit = () => {
    const slide = slides[currentSlide];
    if (slide.type !== 'quiz' || !slide.quiz) return;

    const results: Record<number, boolean> = {};
    slide.quiz.questions.forEach((question, index) => {
      results[index] = quizAnswers[index] === question.correct;
    });
    
    setQuizResults(results);
    setShowQuizResults(true);
  };

  const handleLessonComplete = () => {
    const lessonKey = `${categoryId}-${lessonId}`;
    const newCompleted = new Set(completedLessons);
    newCompleted.add(lessonKey);
    setCompletedLessons(newCompleted);
    localStorage.setItem('completedLessons', JSON.stringify(Array.from(newCompleted)));
  };

  const canProceedFromQuiz = () => {
    const slide = slides[currentSlide];
    if (slide.type !== 'quiz') return true;
    return showQuizResults;
  };

  const renderSlide = () => {
    const slide = slides[currentSlide];
    if (!slide) return null;

    if (slide.type === 'quiz') {
      return (
        <Card className="min-h-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>{slide.title}</CardTitle>
            </div>
            <CardDescription>
              Answer all questions to see your results and continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {slide.quiz?.questions.map((question, qIndex) => (
              <div key={qIndex} className="space-y-3">
                <h4 className="font-medium text-lg">{qIndex + 1}. {question.question}</h4>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <label key={oIndex} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={oIndex}
                        checked={quizAnswers[qIndex] === oIndex}
                        onChange={() => setQuizAnswers({...quizAnswers, [qIndex]: oIndex})}
                        className="text-primary"
                      />
                      <span className={`${showQuizResults ? (
                        oIndex === question.correct ? 'text-green-600 font-medium' : 
                        quizAnswers[qIndex] === oIndex ? 'text-red-600' : ''
                      ) : ''}`}>
                        {option}
                      </span>
                      {showQuizResults && oIndex === question.correct && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </label>
                  ))}
                </div>
                {showQuizResults && (
                  <div className="mt-2 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
            
            {!showQuizResults && (
              <Button 
                onClick={handleQuizSubmit}
                disabled={!slide.quiz?.questions.every((_, index) => quizAnswers[index] !== undefined)}
                className="w-full"
              >
                Submit Quiz
              </Button>
            )}
            
            {showQuizResults && (
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="text-lg font-semibold">Quiz Complete!</h3>
                <p className="text-sm text-muted-foreground">
                  You got {Object.values(quizResults).filter(Boolean).length} out of {slide.quiz?.questions.length} correct
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="min-h-[500px]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle>{slide.title}</CardTitle>
          </div>
          <CardDescription>
            Slide {currentSlide + 1} of {slides.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {slide.content || ''}
          </ReactMarkdown>
        </CardContent>
      </Card>
    );
  };

  if (slides.length === 0) {
    return <div>Loading slides...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb Navigation */}
      {categoryTitle && categoryId && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/category/${categoryId}`} className="hover:text-primary">
            {categoryTitle}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Lesson {currentLessonIndex}</span>
        </div>
      )}

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{currentSlide + 1} of {slides.length} slides</span>
        </div>
        <Progress value={getProgressPercentage()} className="h-2" />
      </div>

      {/* Current Slide */}
      <div className="min-h-[600px]">
        {renderSlide()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
        </div>

        {currentSlide === slides.length - 1 ? (
          <Link to="/">
            <Button 
              onClick={handleLessonComplete}
              className="flex items-center gap-2"
            >
              Complete Lesson & Return Home
              <CheckCircle className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button 
            onClick={nextSlide}
            disabled={!canProceedFromQuiz()}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Slide indicator dots */}
      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide 
                ? 'bg-primary' 
                : index < currentSlide 
                  ? 'bg-primary/60' 
                  : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};