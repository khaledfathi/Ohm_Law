/*
Author:Khaed Fathi
Email:KhaledFathi@protonmail.com
Created : 30/07/2018
Made for : Practice
programer Level : Beginner
PGP Fingerprint : FC8C B81A 70AE 4998 EB62  6F1A 202C 2C62 E64C 0367
LICENSE : GPL V3.0
Github repositorie: ??
*/
/********************************************/

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
	res = document.getElementById("res");
/********************************************/

//create element and its text node and set the place where it will be in 
function create_element(element_type,text_node,put_in){
	var el = document.createElement(element_type),
		txt= document.createTextNode(text_node);
		el.appendChild(txt);
		put_in.appendChild(el);
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
			create_element("option","",type_select);
			create_element("option","Voltage And Current",type_select);
			create_element("option","Voltage And Power",type_select);
			create_element("option","Power And Current",type_select);
			clear();
			break;
		case "Voltage":
			type_select.innerHTML="";
			create_element("option","",type_select);
			create_element("option","Resistance And Current",type_select);
			create_element("option","Power And Current",type_select);
			create_element("option","Power And Resistance",type_select);
			clear();
			break;
		case "Current":
			type_select.innerHTML="";
			create_element("option","",type_select);
			create_element("option","Voltage And Resistance",type_select);
			create_element("option","Power And Voltage",type_select);
			create_element("option","Power And Resistance",type_select);
			clear();
			break;
		case "Power":
			type_select.innerHTML="";
			create_element("option","",type_select);
			create_element("option","Voltage And Current",type_select);
			create_element("option","Resistance And Current",type_select);
			create_element("option","Voltage And Resistance",type_select);
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

/*************End Of Script *****************/
