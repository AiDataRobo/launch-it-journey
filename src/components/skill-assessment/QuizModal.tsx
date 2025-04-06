
import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, AlertCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { quizzes } from './data';
import QuizResults from './QuizResults';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryId: string | null;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, categoryId }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<Date | null>(null);
  
  // Find the current quiz based on categoryId
  const currentQuiz = categoryId ? quizzes.find(quiz => quiz.categoryId === categoryId) : null;
  
  // Reset state when the quiz modal is opened with a new category
  useEffect(() => {
    if (isOpen && categoryId) {
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setIsQuizFinished(false);
      setQuizStartTime(new Date());
      
      // Set initial time remaining
      if (currentQuiz) {
        setTimeRemaining(currentQuiz.timeLimit * 60); // Convert minutes to seconds
      }
    }
  }, [isOpen, categoryId]);
  
  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isOpen && !isQuizFinished && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleFinishQuiz();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen, isQuizFinished, timeRemaining]);
  
  // Format time remaining
  const formatTimeRemaining = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Handle answer selection
  const handleSelectAnswer = (questionIndex: number, answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerId
    });
  };
  
  // Handle next question
  const handleNextQuestion = () => {
    if (!currentQuiz) return;
    
    if (!selectedAnswers[currentQuestionIndex]) {
      toast({
        title: "Please select an answer",
        description: "You need to select an answer before proceeding.",
        variant: "destructive"
      });
      return;
    }
    
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinishQuiz();
    }
  };
  
  // Handle previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Handle finish quiz
  const handleFinishQuiz = () => {
    setIsQuizFinished(true);
  };
  
  // Handle close
  const handleClose = () => {
    if (!isQuizFinished && Object.keys(selectedAnswers).length > 0) {
      if (window.confirm("Are you sure you want to exit? Your progress will be lost.")) {
        onClose();
      }
    } else {
      onClose();
    }
  };
  
  // Calculate progress percentage
  const calculateProgress = () => {
    if (!currentQuiz) return 0;
    return ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  };
  
  // Calculate score
  const calculateScore = () => {
    if (!currentQuiz) return { score: 0, totalQuestions: 0, percentageScore: 0 };
    
    const correctAnswers = currentQuiz.questions.filter((question, index) => 
      selectedAnswers[index] === question.correctAnswer
    ).length;
    
    const totalQuestions = currentQuiz.questions.length;
    const percentageScore = Math.round((correctAnswers / totalQuestions) * 100);
    
    return {
      score: correctAnswers,
      totalQuestions,
      percentageScore
    };
  };
  
  if (!currentQuiz) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        {!isQuizFinished ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">{currentQuiz.title}</DialogTitle>
              <DialogDescription>
                <div className="flex justify-between items-center mt-2">
                  <span>Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}</span>
                  <div className="flex items-center text-orange-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{formatTimeRemaining()}</span>
                  </div>
                </div>
                <Progress value={calculateProgress()} className="mt-2 h-2" indicatorClassName="bg-jobonboard-purple" />
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-medium mb-2">
                  {currentQuiz.questions[currentQuestionIndex].question}
                </h3>
                {currentQuiz.questions[currentQuestionIndex].code && (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mb-4">
                    <code>{currentQuiz.questions[currentQuestionIndex].code}</code>
                  </pre>
                )}
                
                <RadioGroup 
                  value={selectedAnswers[currentQuestionIndex]}
                  onValueChange={(value) => handleSelectAnswer(currentQuestionIndex, value)}
                >
                  {currentQuiz.questions[currentQuestionIndex].answers.map((answer) => (
                    <div key={answer.id} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100">
                      <RadioGroupItem value={answer.id} id={answer.id} />
                      <Label htmlFor={answer.id} className="flex-grow cursor-pointer">{answer.text}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              {currentQuiz.questions[currentQuestionIndex].hint && (
                <div className="flex items-start p-3 bg-blue-50 text-blue-800 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hint:</p>
                    <p className="text-sm">{currentQuiz.questions[currentQuestionIndex].hint}</p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                
                <Button 
                  onClick={handleNextQuestion}
                  className="bg-jobonboard-purple hover:bg-jobonboard-purple-light"
                >
                  {currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <QuizResults 
            quiz={currentQuiz}
            results={calculateScore()}
            selectedAnswers={selectedAnswers}
            timeTaken={quizStartTime ? Math.floor((new Date().getTime() - quizStartTime.getTime()) / 1000) : 0}
            onClose={onClose}
            onRetake={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswers({});
              setIsQuizFinished(false);
              setQuizStartTime(new Date());
              setTimeRemaining(currentQuiz.timeLimit * 60);
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
