function check() {
	var pont = 0;
	var kerdes1 = document.kviz.kerdes1.value;
	var kerdes2 = document.kviz.kerdes2.value;
	var kerdes3 = document.kviz.kerdes3.value;
	var kerdes4 = document.kviz.kerdes4.value;
	var kerdes5 = document.kviz.kerdes5.value;
	var kerdes6 = document.kviz.kerdes6.value;
	var kerdes7 = document.kviz.kerdes7.value;
	var kerdes8 = document.kviz.kerdes8.value;
	var kerdes9 = document.kviz.kerdes9.value;
	var kerdes10 = document.kviz.kerdes10.value;
	var kerdes11 = document.kviz.kerdes11.value;
	var kerdes12 = document.kviz.kerdes12.value;
	var kerdes13 = document.kviz.kerdes13.value;
	var kerdes14 = document.kviz.kerdes14.value;
	var kerdes15 = document.kviz.kerdes15.value;
	var kerdes16 = document.kviz.kerdes16.value;
	var kerdes17 = document.kviz.kerdes17.value;
	var kerdes18 = document.kviz.kerdes18.value;
	var eredmeny = document.getElementById('eredmeny');
	
	
	if(kerdes1=="B") (pont++)
	if(kerdes2=="Hamis") (pont++)
	if(kerdes3=="C") (pont++)
	if(kerdes4=="D") (pont++)
	if(kerdes5=="D") (pont++)
	if(kerdes6=="A") (pont++)
	if(kerdes7=="C") (pont++)
	if(kerdes8=="D") (pont++)
	if(kerdes9=="A") (pont++)
	if(kerdes10=="C") (pont++)
	if(kerdes11=="C") (pont++)
	if(kerdes12=="C") (pont++)
	if(kerdes13=="A") (pont++)
	if(kerdes14=="B") (pont++)
	if(kerdes15=="A") (pont++)
	if(kerdes16=="A") (pont++)
	if(kerdes17=="B") (pont++)
	if(kerdes18=="D") (pont++)
	
	if(pont<6)
	{
		eredmeny.textContent=`Az eredményed: ${pont} pont. Gyenge eredmény! Gyakorolnod kell még.`
	}
	else if(pont<10)
	{
		eredmeny.textContent=`Az eredményed: ${pont} pont. Rossz eredmény! Foglalkozz még vele!`
	}
	else if(pont<13)
	{
		eredmeny.textContent=`Az eredményed: ${pont} pont. Átlagos eredmény! Ennél többre vagy képes!`
	}
	else if(pont<16)
	{
		eredmeny.textContent=`Az eredményed: ${pont} pont. Jó eredmény! Csak egy kevés hiányzik a tökéleteshez.`
	}
	else
	{
		eredmeny.textContent=`Az eredményed: ${pont} pont. Kiválóan dolgoztál!`
	}
	
}