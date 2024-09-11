function  waitingTime (waitingTimes  , serialNumber){
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    const totalInterviewsDone = waitingTimes.length;

    const interviewsRemaining = serialNumber - totalInterviewsDone - 1;

    let totalWaitingTime = 0;

    for (let time of waitingTimes) {
        totalWaitingTime += time;
    }

    const averageWaitingTime = Math.round(totalWaitingTime / totalInterviewsDone);

    const timeBeforeInterview = averageWaitingTime * interviewsRemaining;

    return timeBeforeInterview;
}

