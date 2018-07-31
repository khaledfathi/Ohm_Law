/*
Author:Khaed Fathi
Email:KhaledFathi@protonmail.com
Created : 30/07/2018
Made for : Practice
programer Level : Beginner
PGP Fingerprint : FC8C B81A 70AE 4998 EB62  6F1A 202C 2C62 E64C 0367
LICENSE : GPL V3.0
Github repositorie:https://github.com/khaledfathi/Ohm_Law
*FILES Names:
	FILE 1 = ohm_law_class.js
	FILE 2 = app.js
	File 3 = others.js
*/
/********************************************/

/*#################################################*/
/*################## START FILE 1 #################*/
/*#################################################*/

//ohm_law class (all rules for calculate resistance , voltage , current and power)
class ohm_law{ 
	constructor(r=1 , v=1 , i=1 , p=1){
		this.meaning="r = resistance | v = voltage | i = current | p = power"
		this.r=r;
		this.v=v;
		this.i=i;
		this.p=p;
	}
	//show all value inputed in this class
	show_values(){
		return "resistance = " + this.r + " Ohm | voltage = " + this.v + " V | current = " + this.i + " A | power = " + this.p + " w";
	}
	//help - return all mehods information in this class 
	help(){
		return "### class methods ### \n\n\
** show_values** \n\
	show all value inputed in this class \n\
\n** resistance methods ** \n\n\
	resistance_v_i : get resistance by voltage and current \n\
	resistance_v_p : get resistance by voltage and power \n\
	resistance_p_i : get resistance by power and current \n\
\n** voltage methods ** \n\n\
	voltage_r_i : get votage by resistance and current \n\
	voltage_p_i : get votage by power and current \n\
	voltage_r_i : get votage by resistance and current \n\
\n** current methods ** \n\n\
	current_v_r : get current by voltage and resistance \n\
	current_p_v : get current by power and voltage \n\
	current_p_r : get current by power and resistance\n\
\n** power methods ** \n\n\
	power_v_i : get power by voltage and current\n\
	power_r_i : get power by resistance and current\n\
	power_v_r : get power by volage and resistance";
	}
	//get resistance by voltage and current
	resistance_v_i(){
		return this.v/this.i;
	}
	//get resistance by voltage and power
	resistance_v_p(){
		return Math.pow(this.v,2)/this.p;
	}
	//get resistance by power and current
	resistance_p_i(){
		return this.p/Math.pow(this.i,2);
	}
	//get votage by resistance and current
	voltage_r_i(){
		return this.r*this.i;
	}
	//get votage by power and current
	voltage_p_i(){
		return this.p/this.i;
	}
	//get votage by power and resistance
	voltage_p_r(){
		return Math.sqrt(this.p*this.r);
	}
	//get current by voltage and resistance
	current_v_r(){
		return this.v/this.r;
	}
	//get current by power and voltage
	current_p_v(){
		return this.p/this.v;
	}
	//get current by power and resistance
	current_p_r(){
		return Math.sqrt(this.p/this.r);
	}
	//get power by voltage and current
	power_v_i(){
		return this.v*this.i
	}
	//get power by resistance and current
	power_r_i(){
		return this.r*Math.pow(this.i,2);
	}
	//get power by volage and resistance
	power_v_r(){
		return Math.pow(this.v,2)/this.r;
	}
}
/****************************************************/

/*#################################################*/
/*################## END FILE 1 #################*/
/*#################################################*/

/****************************************************/

/*#################################################*/
/*################## START FILE 2 #################*/
/*#################################################*/

//all varibale needed 
	//selection
var get_select = document.getElementById("get_select"),
	type_select = document.getElementById("type_select"),
	//inputs
	input_a = document.getElementById("input_a"),
	input_b = document.getElementById("input_b"),
	//inputs labels
	input_a_label = document.getElementById("input_a_label"),
	input_b_label = document.getElementById("input_b_label"),
	//result
	res = document.getElementById("res"),
	//electronic logo image
	electronic_log = document.getElementById("electronic_logo")
/********************************************/

//create element and its text node and set the place where it will be in 
function create_element(element_type,text_node,put_in,hidden_and_selected){
	var el = document.createElement(element_type),
		txt= document.createTextNode(text_node);
		el.appendChild(txt);
		put_in.appendChild(el);
	if (hidden_and_selected == 1){
		el.setAttribute("hidden","");
		el.setAttribute("selected","");
	}
}
/********************************************/	

//function for change inputs labels
function change_lable(a,b){
	input_a_label.innerHTML=a;
	input_b_label.innerHTML=b;
}
/********************************************/	
function clear (){
	input_a.value="";
	input_b.value="";
}
/********************************************/	

//run calculation using ohm_law class methods
function run_calc(){
	var r=null,v=null,i=null,p=null,calc;
	//resistance calculations
	if (get_select.value == "Resistance"){
		if (type_select.value == "Voltage And Current"){
			v=Number(input_a.value);
			i=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.resistance_v_i()+" Ohm";
		}else if (type_select.value == "Voltage And Power"){
			v=Number(input_a.value);
			p=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.resistance_v_p()+" Ohm";
		}else if (type_select.value == "Power And Current"){
			p=Number(input_a.value);
			i=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.resistance_p_i()+" Ohm";
		}
	//voltage calculations
	}else if (get_select.value == "Voltage"){
		if (type_select.value == "Resistance And Current"){
			r=Number(input_a.value);
			i=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.voltage_r_i()+" Volt";
		}else if (type_select.value == "Power And Current"){
			p=Number(input_a.value);
			i=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.voltage_p_i()+" Volt";
		}else if (type_select.value == "Power And Resistance"){
			p=Number(input_a.value);
			r=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.voltage_p_r()+" Volt";
		}
	//current calculations
	}else if (get_select.value == "Current"){
		if (type_select.value == "Voltage And Resistance"){
			v=Number(input_a.value);
			r=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.current_v_r()+" Amp";
		}else if (type_select.value == "Power And Voltage"){
			p=Number(input_a.value);
			v=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.current_p_v()+" Amp";
		}else if (type_select.value == "Power And Resistance"){
			p=Number(input_a.value);
			r=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.current_p_r()+" Amp";
		}
	//power calculations
	}else if (get_select.value == "Power"){
		if (type_select.value == "Voltage And Current"){
			v=Number(input_a.value);
			i=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.power_v_i()+" Watt";
		}else if (type_select.value == "Resistance And Current"){
			r=Number(input_a.value);
			i=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.power_r_i()+" Watt";
		}else if (type_select.value == "Voltage And Resistance"){
			v=Number(input_a.value);
			r=Number(input_b.value);
			calc = new ohm_law(r,v,i,p);
			return calc.power_v_r()+"Watt";
		}
	}
}
/********************************************/

/********************************************/
/***************** EVENTS *******************/
/********************************************/

//get_select action (on change) to change select_type 
get_select.onchange = function (){
	//reset every thing for wating user to set type_select values
	input_a_label.innerHTML="- - - - - -";
	input_b_label.innerHTML="- - - - - -";
	input_a.setAttribute("disabled","");
	//set select_type options depend on get_select options 
	switch (get_select.value){
		case "Resistance":
			type_select.innerHTML="";
			create_element("option","",type_select,1);
			create_element("option","Voltage And Current",type_select);
			create_element("option","Voltage And Power",type_select);
			create_element("option","Power And Current",type_select);
			electronic_log.setAttribute("src","images/ohm_logo.png");
			clear();
			break;
		case "Voltage":
			type_select.innerHTML="";
			create_element("option","",type_select,1);
			create_element("option","Resistance And Current",type_select);
			create_element("option","Power And Current",type_select);
			create_element("option","Power And Resistance",type_select);
			electronic_log.setAttribute("src","images/volt_logo.png");
			clear();
			break;
		case "Current":
			type_select.innerHTML="";
			create_element("option","",type_select,1);
			create_element("option","Voltage And Resistance",type_select);
			create_element("option","Power And Voltage",type_select);
			create_element("option","Power And Resistance",type_select);
			electronic_log.setAttribute("src","images/amp_logo.png");
			clear();
			break;
		case "Power":
			type_select.innerHTML="";
			create_element("option","",type_select,1);
			create_element("option","Voltage And Current",type_select);
			create_element("option","Resistance And Current",type_select);
			create_element("option","Voltage And Resistance",type_select);
			electronic_log.setAttribute("src","images/power_logo.png")
			clear();
			break;
	}
}
/********************************************/

//type_select action (set the labels depend on type_select
type_select.onchange = function (){
	//remove disabled from inputs 
	input_a.removeAttribute("disabled");
	input_b.removeAttribute("disabled");
	//resistance cases
	if (get_select.value == "Resistance"){
		if (type_select.value == "Voltage And Current"){
			change_lable("Voltage", "Current");
		}else if (type_select.value == "Voltage And Power"){
			change_lable("Voltage", "Power");
		}else if (type_select.value == "Power And Current"){
			change_lable("Power", "Current");
		}
		clear();
	//voltage cases 
	}else if (get_select.value == "Voltage"){
		if (type_select.value == "Resistance And Current"){
			change_lable("Resistance", "Current");
		}else if (type_select.value == "Power And Current"){
			change_lable("Power", "Current");
		}else if (type_select.value == "Power And Resistance"){
			change_lable("Power", "Resistance");
		}
		clear();
	//current cases
	}else if (get_select.value == "Current"){
		if (type_select.value == "Voltage And Resistance"){
			change_lable("Voltage", "Resistance");
		}else if (type_select.value == "Power And Voltage"){
			change_lable("Power", "Voltage");
		}else if (type_select.value == "Power And Resistance"){
			change_lable("Power", "Resistance");
		}
		clear();
	//power cases
	}else if (get_select.value == "Power"){
		if (type_select.value == "Voltage And Current"){
			change_lable("Voltage", "Current");
		}else if (type_select.value == "Resistance And Current"){
			change_lable("Resistance", "Current");
		}else if (type_select.value == "Voltage And Resistance"){
			change_lable("Voltage", "Resistance");
		}
		clear();
	}
}
/********************************************/

//show result "on key up" by change the "res" element inner HTML
input_a.onkeyup = function (){
	res.innerHTML="result = "+run_calc();		
};
input_b.onkeyup = function (){
	res.innerHTML="result = "+run_calc();
};
/********************************************/

/*#################################################*/
/*################## END FILE 2 #################*/
/*#################################################*/

/*#################################################*/
/*################## START FILE 3 #################*/
/*#################################################*/

		//Empty

/*#################################################*/
/*################### END FILE 3 ##################*/
/*#################################################*/

/*************End Of Script *****************/
