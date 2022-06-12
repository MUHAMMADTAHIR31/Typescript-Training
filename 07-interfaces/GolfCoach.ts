import { Coach } from "./Coach";

export class GolfCoach implements Coach {

    getDailyWorkout(): string {
        return "Practice your backhand swing for 15 minutes";
    }
}
