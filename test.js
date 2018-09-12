let objArr={"li1":1,"li2":2}

let output=Object.entries(objArr).map(([key,value])=>value);

console.log(output);







/*


let input = [{
			"CASEID": "20000856",
			"CLIENTNAME": "Nilu phule",
			"BUSINESSNAME": "",
			"STARTDATE": "08.24.2018",
			"CASETYPE": "Other Cases",
			"PRGWRKCDATE": "08.24.2018",
			"PRGWRKUDATE": null,
			"DETAILS": "progress report test 007",
			"ATTACHMENTS": "f.txt"
		},
		{
			"CASEID": "20000856",
			"CLIENTNAME": "Nilu phule",
			"BUSINESSNAME": "",
			"STARTDATE": "08.24.2018",
			"CASETYPE": "Other Cases",
			"PRGWRKCDATE": "08.28.2018",
			"PRGWRKUDATE": null,
			"DETAILS": "Another Document",
			"ATTACHMENTS": "Twitter-icon.png"
		}
	]


    let output = input.reduce((init,next)=>{
        if(init.length===0){

            let {DETAILS,ATTACHMENTS ,...newJson }=next
            newJson.lines =[{"DETAILS":DETAILS,"ATTACHMENTS":ATTACHMENTS}]
            init.push(newJson)           
            

        }else {
           if(init[0]['CASEID']===next['CASEID']){

            init[0]['lines'].push([{"DETAILS":next.DETAILS,"ATTACHMENTS":next.ATTACHMENTS}])
           }

        }
        

        return init

    },[])

    console.log(output,output[0].lines);
    */