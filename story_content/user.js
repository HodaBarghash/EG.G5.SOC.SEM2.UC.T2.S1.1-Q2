function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xyW9aaQNI9":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyeDtbT-o-dOWVXpZLow80y40tJfyiIfSyF2pd77bYu7XLrdLB2vzFIN98D_OJ-ieOB/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

