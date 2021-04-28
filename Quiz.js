class Quiz
{
    constructor()
    {
        this.lastFed;
    }

    getFedTime(lastFed)
    {
        this.lastFed = lastFed;
    }

    play()
    {
        if(lastFed>=12){
            text("Last Feed : "+ lastFed%12 + " PM", 350,30);
           }else if(lastFed==0){
             text("Last Feed : 12 AM",350,30);
           }else{
             text("Last Feed : "+ lastFed + " AM", 350,30);
           }
    }
}