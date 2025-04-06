
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Download, Share2, Trophy, Clock, AlertTriangle, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Quiz, QuizResultsType } from './types';
import CertificateModal from './CertificateModal';

interface QuizResultsProps {
  quiz: Quiz;
  results: QuizResultsType;
  selectedAnswers: Record<number, string>;
  timeTaken: number;
  onClose: () => void;
  onRetake: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  quiz,
  results,
  selectedAnswers,
  timeTaken,
  onClose,
  onRetake
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showDetailedResults, setShowDetailedResults] = useState(false);
  
  // Format time taken
  const formatTimeTaken = () => {
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    return `${minutes}m ${seconds}s`;
  };
  
  // Determine if user passed
  const isPassed = results.percentageScore >= quiz.passingScore;
  
  // Determine skill level based on score
  const getSkillLevel = () => {
    if (results.percentageScore >= 90) return 'Expert';
    if (results.percentageScore >= 75) return 'Advanced';
    if (results.percentageScore >= quiz.passingScore) return 'Proficient';
    if (results.percentageScore >= 40) return 'Beginner';
    return 'Novice';
  };
  
  // Share results
  const handleShare = () => {
    navigator.clipboard.writeText(
      `I scored ${results.percentageScore}% on the ${quiz.title} assessment on JobOnboard! #TechSkills #JobOnboard`
    );
    toast({
      title: "Copied to clipboard",
      description: "Share your results with others!"
    });
  };
  
  return (
    <>
      <div className="text-center pb-4">
        {isPassed ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="w-10 h-10 text-green-600" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-10 h-10 text-orange-600" />
            </div>
          </motion.div>
        )}
        
        <motion.h3 
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {isPassed ? 'Congratulations!' : 'Almost There!'}
        </motion.h3>
        
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {isPassed 
            ? `You've successfully passed the ${quiz.title} assessment.` 
            : `You didn't quite reach the passing score of ${quiz.passingScore}% yet.`
          }
        </motion.p>
        
        <motion.div 
          className="bg-gray-50 p-6 rounded-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-4 flex justify-center">
            <div className="w-36 h-36 relative">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={isPassed ? "#8B5CF6" : "#FB923C"}
                  strokeWidth="3"
                  strokeDasharray={`${results.percentageScore}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">{results.percentageScore}%</span>
                <span className="text-sm text-gray-500">Score</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Questions</div>
              <div className="font-semibold">{results.score} / {results.totalQuestions}</div>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Time</div>
              <div className="font-semibold">{formatTimeTaken()}</div>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Level</div>
              <div className="font-semibold">{getSkillLevel()}</div>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Status</div>
              <div className="font-semibold">
                {isPassed ? (
                  <span className="text-green-600">Passed</span>
                ) : (
                  <span className="text-orange-600">Failed</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {isPassed && (
            <Button 
              className="flex items-center gap-2 bg-jobonboard-purple hover:bg-jobonboard-purple-light"
              onClick={() => setShowCertificate(true)}
            >
              <Trophy className="w-4 h-4" />
              View Certificate
            </Button>
          )}
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
            Share Results
          </Button>
          
          <Button 
            variant={isPassed ? "outline" : "default"}
            className={`flex items-center gap-2 ${!isPassed ? "bg-jobonboard-blue hover:bg-jobonboard-blue-light" : ""}`}
            onClick={onRetake}
          >
            <Rocket className="w-4 h-4" />
            {isPassed ? "Retake Quiz" : "Try Again"}
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            variant="ghost"
            onClick={() => setShowDetailedResults(!showDetailedResults)}
            className="text-gray-600"
          >
            {showDetailedResults ? "Hide Detailed Results" : "View Detailed Results"}
          </Button>
        </motion.div>
        
        {showDetailedResults && (
          <motion.div 
            className="mt-6 text-left"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-medium mb-4 text-gray-800">Question Analysis</h4>
            
            <div className="space-y-4">
              {quiz.questions.map((question, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border ${
                    selectedAnswers[index] === question.correctAnswer 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      selectedAnswers[index] === question.correctAnswer 
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {selectedAnswers[index] === question.correctAnswer 
                        ? <Check className="w-4 h-4" />
                        : <X className="w-4 h-4" />
                      }
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">
                        {index + 1}. {question.question}
                      </p>
                      
                      <div className="space-y-2 mb-3">
                        {question.answers.map(answer => (
                          <div 
                            key={answer.id}
                            className={`text-sm p-2 rounded ${
                              answer.id === question.correctAnswer 
                                ? 'bg-green-100 text-green-800'
                                : answer.id === selectedAnswers[index]
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {answer.id === question.correctAnswer && (
                              <Check className="w-4 h-4 inline mr-2 text-green-600" />
                            )}
                            {answer.id === selectedAnswers[index] && answer.id !== question.correctAnswer && (
                              <X className="w-4 h-4 inline mr-2 text-red-600" />
                            )}
                            {answer.text}
                          </div>
                        ))}
                      </div>
                      
                      {question.explanation && (
                        <div className="text-sm bg-white p-3 rounded border border-gray-200">
                          <p className="font-medium mb-1">Explanation:</p>
                          <p>{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      
      <CertificateModal
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
        quiz={quiz}
        score={results.percentageScore}
        completionDate={new Date()}
      />
    </>
  );
};

export default QuizResults;
