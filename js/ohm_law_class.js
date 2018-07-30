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
