function calculateFinalScore (obj){
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }

    let farmerFather = 0;  
    let totalScore;

    if (obj.isFFamily === true) {
        farmerFather = 20;
    }

    totalScore = obj.testScore + obj.schoolGrade + farmerFather;

    if (totalScore >= 80) {
        return true;
    }

    return false;
}

