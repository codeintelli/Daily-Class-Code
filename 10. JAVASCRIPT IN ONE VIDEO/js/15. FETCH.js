fetch('https://api.covid19india.org/data.json')
.then((data)=>{
	console.log(data);
	return data.json();
})
.then((finaldata)=>{
	console.log(finaldata);
}).catch((err)=>{
	console.log(err);
})