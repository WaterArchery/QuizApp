import Question from "./Question";

const question1 = new Question("What country drinks the most coffee per capita?",  ["A) Finland", "B) France", "C) Germany", "D) Turkiye"], 1);
const question2 = new Question("Which planet in the Milky Way is the hottest?",  ["A) Mars", "B) Venus", "C) Earth", "D) Saturn"], 2);
const question3 = new Question("Who sang the title song for the latest Bond film, No Time to Die?",  ["A) Adele", "B) Sam Smith", "C) Billie Eilish"], 3);
const question4 = new Question("Which flies a green, white, and orange (in that order) tricolor flag? ",  ["A) Ireland", "B) Ivory Coast", "C) Italy"], 1);
const question5 = new Question("What company makes the Xperia model of smartphone?",  ["A) Samsung", "B) Sony ", "C) Nokia"], 2);
const question6 = new Question("Which city is home to the Brandenburg Gate?",  ["A) Vienna", "B)Zurich", "C) Berlin"], 3);

export const Questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
];

export default Questions;