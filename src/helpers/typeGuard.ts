import { AdviceType } from "../types/advice";

export const isAdvice = (advice: any): advice is AdviceType => 'slip' in advice;