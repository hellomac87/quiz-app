import { client } from 'src/http/client';
import { QuizParams, QuizResponse } from 'src/types/quiz';

export const getQuiz = (params: QuizParams): Promise<QuizResponse> => client.get('', { params });
