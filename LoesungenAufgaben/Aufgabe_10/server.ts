fetch("covid.json").then(response=>response.json()
    .then(data => {
        let min: any = Object.entries(data.Fallzahlen)[0]
        let max: any = Object.entries(data.Fallzahlen)[0]
        let sum: number = 0;
        let count: number = Object.keys(data.Fallzahlen).length;
        for (const [key, value] of Object.entries(data.Fallzahlen)){
            if(min[1]>value){min = [key, value]}
            if(max[1]<value){max = [key, value]}
            sum += value as number;
        }
        console.log("Minimum: "+min[0]+" mit "+min[1]+" Infektionen")
        console.log("Maximum: "+max[0]+" mit "+max[1]+" Infektionen")
        console.log("Total: "+sum+" Infektionen")
        console.log("landesweiter Durschschnitt: "+sum/count+" Infektionen pro Bundesland")
    })
)

