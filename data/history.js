class CalculateHistory {
    constructor(history){
        this.history = []
    }

    addHistory(hist){
        this.history.push(hist);
    }

    getHistory(){
        return this.history;
    }

    removeAll(){
        this.history.length=0;
    }
}
