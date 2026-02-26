import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`. [DONE]
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let publishedQuestions: Question[];
    publishedQuestions = questions.filter(
        (question: Question): boolean => question.published,
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`. [DONE]
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions: Question[] = questions.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            ),
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead. [DONE]
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const IDQuestions: Question[] = questions.filter(
        (question: Question): boolean => question.id === id,
    );
    if (IDQuestions.length !== 0) {
        return IDQuestions[0];
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`. [DONE]
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removeIDQuestion: Question[] = questions.filter(
        (questions: Question): boolean => questions.id != id,
    );
    return removeIDQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array. [DONE]
 */
export function getNames(questions: Question[]): string[] {
    const nameOfQuestions: string[] = questions.map(
        (question: Question): string => question.name,
    );
    return nameOfQuestions;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together. [DONE]
 */
export function sumPoints(questions: Question[]): number {
    const pointsQuestions: number[] = questions.map(
        (question: Question): number => question.points,
    );
    const sumQuestions: number = pointsQuestions.reduce(
        (questSum: number = 0, currNum: number) => questSum + currNum,
    );
    return sumQuestions;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions. [DONE]
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions: number[] = questions.map(
        (question: Question): number =>
            question.published ? question.points : 0,
    );
    const totalPublished: number = publishedQuestions.reduce(
        (questSum: number = 0, currNum: number) => questSum + currNum,
    );
    return totalPublished;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples! [DONE]
 */
export function toCSV(questions: Question[]): string {
    const header: string = "id,name,options,points,published\n";
    let CSVQuestions: string[] = [];
    CSVQuestions = questions.map(
        (question: Question): string =>
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published,
    );
    return header + CSVQuestions.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`. [DONE]
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answers: Answer[];
    answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status. [DONE]
 */
export function publishAll(questions: Question[]): Question[] {
    const copyQuestions: Question[] = [...questions];
    const pQuestions: Question[] = copyQuestions.map(
        (question: Question): Question => ({ ...question, published: true }),
    );
    return pQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type. [DONE]
 */
export function sameType(questions: Question[]): boolean {
    const numOfQuestions: number = questions.length;
    if (numOfQuestions === 0) {
        return true;
    }
    const questType: string = questions[0].type;
    const sameTypeQuestions: Question[] = questions.filter(
        (question: Question): boolean => questType === question.type,
    );

    if (sameTypeQuestions.length === numOfQuestions) {
        return true;
    }
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.s [DONE]
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let newQues: Question = makeBlankQuestion(id, name, type);
    let newQuestions: Question[] = [...questions, newQues];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`. [DONE]
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const newQuestions: Question[] = questions.map(
        (question: Question): Question =>
            targetId === question.id ?
                { ...question, name: newName }
            :   question,
    );
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list. [DONE]
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    const newQIsMCQ: boolean = newQuestionType === "multiple_choice_question";
    let newQuestionWNewType: Question[];
    if (newQIsMCQ) {
        newQuestionWNewType = questions.map(
            (question: Question): Question =>
                targetId === question.id ?
                    { ...question, type: newQuestionType }
                :   question,
        );
    } else {
        newQuestionWNewType = questions.map(
            (question: Question): Question =>
                targetId === question.id ?
                    { ...question, type: newQuestionType, options: [] }
                :   question,
        );
    }
    return newQuestionWNewType;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces. [DONE]
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let newQuestions3: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    ); //make a copy of questions
    let targetQuestion: Question | undefined = newQuestions3.find(
        (question: Question): Boolean => question.id === targetId, //find target question
    );

    if (!targetQuestion) {
        //if targetquestion isnt in the list
        return newQuestions3;
    }
    let targetQIndex: number = newQuestions3.findIndex(
        (question: Question): Boolean => question.id === targetId, //find targetquestion's index
    );

    if (targetOptionIndex === -1) {
        newQuestions3[targetQIndex].options = [
            ...newQuestions3[targetQIndex].options,
            newOption,
        ];
    } else {
        newQuestions3[targetQIndex].options.splice(
            targetOptionIndex,
            1,
            newOption,
        );
    }
    return newQuestions3;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID. [DONE]
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    let newQuestions2: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
    const copyQuestion: Question | undefined = questions.find(
        (question: Question): Boolean => question.id === targetId,
    );
    if (!copyQuestion) {
        return newQuestions2;
    }
    let copyQIndex: number = questions.findIndex(
        (question: Question): Boolean => question.id === targetId,
    );

    let dupliQuestion: Question = duplicateQuestion(newId, copyQuestion);
    //dupliQuestion = {...dupliQuestion, }
    newQuestions2.splice(copyQIndex + 1, 0, dupliQuestion);
    return newQuestions2;
}
