/*jshint ignore:start*/
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	Link,
	IndexLink,
	IndexRoute,
	hashHistory
}
	from 'react-router';

let smithClicker= {
	logic:
	{
		buildingList:
		[
			{
				bId: 0,
				icon: "./img/mallet.png",
				baseCost: 5,
				prod: 3,
			},
			{
				bId: 1,
				icon: "./img/anvil.png",
				baseCost: 15,
				prod: 10,
			},
			{
				bId: 2,
				icon: null,
				baseCost: 40,
				prod: 50
			},
			{
				bId: 3,
				icon: null,
				baseCost: 50,
				prod: 100,
			},
			{
				bId: 4,
				icon: null,
				baseCost:60,
				prod: 200,
			},
			{
				bId: 5,
				icon: null,
				baseCost: 90,
				prod: 300,
			},
			{
				bId: 6,
				icon: null,
				baseCost: 110,
				prod: 500,
			},
			{
				bId: 7,
				icon: null,
				baseCost: 130,
				prod: 600,
			},
			{
				bId: 8,
				icon: null,
				baseCost: 150,
				prod: 1000,
			},
			{
				bId: 9,
				icon: null,
				baseCost: 200,
				prod: 2000,
			},
		],
		upgradeList:
		[
			{
				uId:0,
				icon: null,
				baseCost:5,
				effectId: 0,
				effectPow: 1,
			},
			{
				uId:1,
				icon: null,
				baseCost: 15,
				effectId: 0,
				effectPow: 2,
			},
			{
				uId:2,
				icon: null,
				baseCost: 25,
				effectId: 1,
				effectPow: 1.5,
			},
			{
				uId:3,
				icon:null,
				baseCost:40,
				effectId:3,
				effectPow:0.5,
			},
			{
				uId:4,
				icon:null,
				baseCost:60,
				effectId:4,
				effectPow:0.5,
			},
			{
				uId:5,
				icon:null,
				baseCost:75,
				effectId:5,
				effectPow:0.5,
			},
			{
				uId:6,
				icon:null,
				baseCost:100,
				effectId:6,
				effectPow:0.5,
			},
		],
		imgs:
		{
			clickedObject: "./img/mainImg.png",
			background: null, //"./img/background.png"
			shopBackground: "./img/shop.png",
			upgradesBackground: "./img/upgrades.png",
			buildingBackground: "./img/building.png",
			upgradeBackground: "./img/upgrade.png",
		}
	},
	polish:
	{
		changeLanguage: "Zmień język",
		money:          "Pieniądze (PLN)",
		moneyOnSec:     "Pieniądze/sek",
		clicksOnSec:    "Uderzenia/sek",
		maxMoney:       "Max pieniędzy",
		price:          "Koszt",
		buy:            "Kup",
		buyMax:         "Kup max",
		tick:           "Takt",
		save:			"Zapisz",
		load:			"Wczytaj",
		reset: 			"Resetuj postęp",

		bName:
		[
			"Młotek",
			"Kowadło",
			"Robotnik",
			"Początkujący kowal",
			"Kowal czeladnik",
			"Adept kowalstwa",
			"Kowal ekspert",
			"Mistrz kowalski",
			"Kowal z legend",
			"Agent Kowal"
		],
		bDesc:
		[
			"Podstawowe narzędzie kowala",
			"Wykuwa się na nim wygodniej niż na ziemi",
			"Po prostu wieśniak z młotkiem",
			"Ten chłopak kiedyś miał w rękach młot kowalski i nawet nim raz machnął",
			"Ten facet jest niesamowity! Nie uderza się po palcach. Zazwyczaj.",
			"Wie co robi",
			"Nie sądziłeś, że jest możliwe wykuwanie dwóch mieczy naraz, ale ten kowal robi to bez problemu",
			"Uderza tak szybko że ledwo widzisz jego ręce",
			"Słyszałeś o nim 500 letnią legendę, skąd on się tu wziął?",
			"Po prostu siedzi na krześle, a przed pojawiają się miecze"
		],
		uName:
		[
			"Skórzane rączki",
			"Silniejszy młotek",
			"Lepsze żelazo",
			"Tańsze materiały",
			"Darmowe piwo",
			"Podarek dla właściciela sklepu",
			"Zakrzywiacz czasoprzestrzeni"
		],
		uDesc:
		[
			"Skórzane rączki sprawiają, że młotek ci się nie wyślizguje. Dostajesz 1 PLN więcej z każdym uderzeniem",
			"Twój młot jest wytrzymalszy, potrzebujesz mniej uderzeń aby wykonać miecz. Dostajesz 2 PLN więcej z każdym uderzeniem",
			"Kupiłeś żelazo lepszej jakości. Zarabiasz 50% więcej co sekundę",
			"Upewniłeś się, że znalazłeś najlepszą ofertę materiałów, wszystko, kosztuje o połowę mniej",
			"Obiecałeś kowalom darmowe piwo. Nowi kowale dają się nająć o połowę taniej",
			"Właściciel sklepu z ulepszeniami bardziej cię lubi, sprzedaje ci wszystko o połowę taniej",
			"Ta NIESAMOWITA maszyna sprawia, że na małej przestrzeni czas płynie inaczej. Zyskujesz pieniądze 2 razy szybciej"
		],
	},
	english:
	{
		changeLanguage: "Change Language",
		money:          "Money($)",
		moneyOnSec:     "Money/sec",
		clicksOnSec:    "Hits/sec",
		maxMoney:       "Max money",
		price:          "Cost",
		buy:            "Buy",
		buyMax:         "Buy max",
		tick:           "Tick",
		save:			"Save",
		load:			"Load",
		reset: 			"Reset progress",

		bName:
		[
			"Hammer",
			"Anvil",
			"Peon",
			"Novice Smith",
			"Apprentice Smith",
			"Adept Smith",
			"Expert Smith",
			"Master Smith",
			"Legendary Smith",
			"Agent Smith"
		],
		bDesc:
		[
			"Basic smithing tool",
			"It's better to smith on this than on the ground",
			"Just a villager with hammer",
			"That guy had smithing hammer in hands once",
			"That man is amazing! He even doesn't hit his fingers. Usually.",
			"He knows what he is doing",
			"You haven't thought it is possible to smith two swords at once, but this smith can do that easily",
			"He is smithing so fast you can barely see his hands",
			"You heard 500 year old tales about that man, how he got here?",
			"He just sits on a chair and swords appear in front of him from thin air"
		],
		uName:
		[
			"Leather handles",
			"Stronger hammer",
			"Better Iron",
			"Cheap materials",
			"Free beer promise",
			"Befriend shop owner",
			"Local spacetime expander"
		],
		uDesc:
		[
			"Leather handles make your hammer don't slip away. You get 1$ more with each hit",
			"Your hammer is stronger, you need less hits to make a sword. You get 2$ more with each hit",
			"You bought iron of better quality. You get 50% more money/sec",
			"You made sure you get best offer on materials, everything costs you 50% less",
			"You promised free beer for all smiths. You can recruit new smiths 50% cheaper",
			"Upgrade shop owner is now your friend, he sells you stuff 50% cheaper",
			"This AMAZING machine makes time flow differently in small area. Your production rate is increased twice"
		],
	}
};

let usedModule=smithClicker;
let defaultLang="english";

let roundToNDecimal = (number,n) => {
	let pow=Math.pow(10,n);
	number=Math.round(number*pow*10)/(pow*10);
	number=Math.round(number*pow)/pow;
	return number;
};

class Building extends React.Component
{
	handleClick = event => {
		this.props.methodClick(this.props.bId);
	};
	handleBuyMax = event => {
			this.props.methodClickMax(this.props.bId);
	}
	render()
	{
		let texts=usedModule[this.props.lang];
		return  <div 	className="building"
						style={{backgroundImage:"url("+usedModule.logic.imgs.buildingBackground+")"}}>
					<img src={this.props.icon}/>
					<h1>{this.props.name}:<span className="buildNumber">{this.props.quant}</span></h1>
					<h2>{this.props.desc}</h2>
					<div>{texts.price}:{this.props.cost.toFixed(2)}</div>
					<div>{texts.moneyOnSec}:{this.props.prof.toFixed(2)}</div>
					{this.props.money>= this.props.cost ? <button onClick={this.handleClick}>{texts.buy}</button> : <div/>}
					{this.props.money>= this.props.cost ? <button onClick={this.handleBuyMax}>{texts.buyMax}</button> : <div/>}
				</div>;
	}
}

class Shop extends React.Component
{
	render()
	{
		let texts=usedModule[this.props.lang];
		return  <ul className="shop"
					style={{backgroundImage:"url("+usedModule.logic.imgs.shopBackground+")"}}>
					{usedModule.logic.buildingList.map( (el,index) =>
						this.props.maxMoney*2>=this.props.buildCosts[index] || index===0 ? <Building
						bId={el.bId}
						methodClick={this.props.methodClick}
						methodClickMax={this.props.methodClickMax}
						key={"Building"+index}
						name={texts.bName[index]}
						desc={texts.bDesc[index]}
						icon={el.icon}
						quant={this.props.buildings[index]}
						cost={this.props.buildCosts[index]}
						prof={this.props.prof[index]*this.props.profitMult}
						money={this.props.money}
						lang={this.props.lang}/> : null)}
				</ul>;
	}
}

class Upgrade extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	handleClick= (event) =>{
		this.props.methodClick(this.props.uId,this.props.effectId);
	}
	render()
	{
		let texts=usedModule[this.props.lang];
		let upgradeDiv= <div 	className="upgrade"
								style={{backgroundImage:"url("+usedModule.logic.imgs.upgradeBackground+")"}}>
							<img src={this.props.icon}/>
							<h1>{this.props.name}</h1>
							<div>{this.props.desc}</div>
							<div>{texts.price}: {this.props.cost.toFixed(2)}</div>
							<button onClick={this.handleClick}>{texts.buy}</button>
						</div>;
		return  <div className={this.props.money >= this.props.cost ? "canBuy" : "cantBuy"}>{upgradeDiv}</div>
	}
}

class UpgradeList extends React.Component
{
	render()
	{
		let texts=usedModule[this.props.lang];
		return  <div 	className="upgradeList"
						style={{backgroundImage:"url("+usedModule.logic.imgs.upgradesBackground+")"}}>
					{usedModule.logic.upgradeList.map( (el,index) => this.props.upgrades[index]===0 && (this.props.maxMoney*2>=this.props.upgCosts[index] || index===0 )? <Upgrade
						uId={el.uId}
						effectId={el.effectId}
						methodClick={this.props.methodClick}
						key={"Upgrade"+index}
						icon={el.icon}
						name={texts.uName[index]}
						desc={texts.uDesc[index]}
						cost={this.props.upgCosts[index]}
						money={this.props.money}
						lang={this.props.lang}/> : null)}
				</div>;
	}
}

class MainView extends React.Component
{
	handleClick = () =>{
		this.props.methodClick();
	}
	render()
	{
		return  <div className="mainView">
					<div
						style={{backgroundImage:"url("+usedModule.logic.imgs.clickedObject+")"}}
						onClick={this.handleClick}/>
				</div>;
	}
}

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		let buildArr=Array(usedModule.logic.buildingList.length).fill(0);
		let upgArr=Array(usedModule.logic.upgradeList.length).fill(0);
		let buildCosts=usedModule.logic.buildingList.map( el => el.baseCost);
		let upgCosts=usedModule.logic.upgradeList.map( el => el.baseCost);
		let prod=usedModule.logic.buildingList.map( el => el.prod);

		this.state={
			lang: defaultLang,
			money:0,
			moneySec:0,
			click: 0,
			lastClick: 0,
			maxMoney: 0,
			costIncr: 1.1,
			buildings: buildArr,
			buildCosts: buildCosts,
			prod: prod,
			upgrades: upgArr,
			upgCosts: upgCosts,

			clickPower: 1,
			clickPowerMult: 1,
			profitMult: 1,
			costMult: 1,
			buildCostMult: 1,
			upgCostMult: 1,
			tickTime: 1000,
		};
	}
	calcCosts = (newCostMult,newBuildCostMult,newUpgCostMult) => {
		let costMult=newCostMult;
		let buildCostMult=newBuildCostMult;
		let upgCostMult=newUpgCostMult;
		let buildCosts=usedModule.logic.buildingList.map( el => el.baseCost*costMult*buildCostMult);
		let upgCosts=usedModule.logic.upgradeList.map( el => el.baseCost*costMult*upgCostMult);

		this.setState({
			costMult:costMult,
			buildCosts:buildCosts,
			upgCosts:upgCosts,
		});
		console.log(costMult,buildCostMult,upgCostMult,buildCosts,upgCosts);
	};
	calcProfits = () => {
		let profits=usedModule.logic.buildingList.map( (el,index) => this.state.prod[index]*this.state.buildings[index]);
		let profit=profits.reduce( (prev,curr) => prev+curr,0)*this.state.profitMult;

		this.setState({moneySec:profit,});
	};
	changeClickPower = n => {
		this.setState({clickPower:this.state.clickPower+n,});
	};
	changeClickPowerMult = n => {
		this.setState({clickPowerMult:this.state.clickPowerMult*n,});
	};
	changeProfitMult = n => {
		let newProfMult=this.state.profitMult*n;

		this.setState({profitMult:newProfMult,});
		this.calcProfits();
	};
	changeCostMult = n => {
		let newCostMult=this.state.costMult*n;
		this.setState({costMult:newCostMult});
		this.calcCosts(newCostMult,this.state.buildCostMult,this.state.upgCostMult);
	};
	changeBuildCostMult = n => {
		let newBuildCostMult=this.state.buildCostMult*n;
		this.setState({buildCostMult:newBuildCostMult});
		this.calcCosts(this.state.costMult,newBuildCostMult,this.state.upgCostMult);
	};
	changeUpgCostMult = n => {
		let newUpgCostMult=this.state.upgCostMult*n;
		this.setState({upgCostMult:newUpgCostMult});
		this.calcCosts(this.state.costMult,this.state.buildCostMult,newUpgCostMult);
	};
	changeTickTime = n => {
		let newTime=this.state.tickTime*n;
		clearInterval(this.state.interval);
		let newInter=setInterval(this.addMoney,newTime);
		this.setState({
			tickTime:newTime,
			interval:newInter,
		});
	};
	buyBuilding = bId =>{
		let buildCost=  this.state.buildCosts[bId];
		let nextBuildCost=  this.state.costMult*
							Math.pow(this.state.costIncr+bId*0.02,this.state.buildings[bId]+1)*
							usedModule.logic.buildingList[bId].baseCost;
		nextBuildCost=roundToNDecimal(nextBuildCost,2);
		buildCost=roundToNDecimal(buildCost,2);

		if(this.state.money>=buildCost)
		{
			let newBuild=this.state.buildings;
			newBuild[bId]+=1;

			let newMoney=this.state.money-buildCost;
			newMoney=roundToNDecimal(newMoney,2);

			let profits=usedModule.logic.buildingList.map( (el,index) => this.state.prod[index]*this.state.buildings[index]);
			let profit=profits.reduce( (prev,curr) => prev+curr ,0)*this.state.profitMult;
			profit=roundToNDecimal(profit,2);

			let newBuildCost=this.state.buildCosts;
			newBuildCost[bId]=nextBuildCost;

			this.setState({
				buildings: newBuild,
				money: newMoney,
				moneySec: profit,
				buildCosts: newBuildCost,
			});
		}
	};
	buyMaxBuilding = bId => {
		let buildCost=  this.state.buildCosts[bId];
		let nextBuildCost=  Math.floor(this.state.costMult*
							Math.pow(this.state.costIncr+bId*0.02,this.state.buildings[bId]+1)*
							usedModule.logic.buildingList[bId].baseCost);
		let money=this.state.money;
		let newBuild=this.state.buildings;

		if(money>=buildCost)
		{
			while(money>=buildCost)
			{
				newBuild[bId]+=1;
				money-=buildCost;
				buildCost=nextBuildCost;
				nextBuildCost=  Math.floor(this.state.costMult*
								Math.pow(this.state.costIncr+bId*0.02,newBuild[bId]+1)*
								usedModule.logic.buildingList[bId].baseCost);
			}
			let newBuildCost=this.state.buildCosts;
			newBuildCost[bId]=buildCost;

			let profits=usedModule.logic.buildingList.map( (el,index) => this.state.prod[index]*this.state.buildings[index]);
			let profit=profits.reduce( (prev,curr) => prev+curr ,0)*this.state.profitMult;

			this.setState({
				buildings: newBuild,
				money: money,
				moneySec: profit,
				buildCosts: newBuildCost,
			});
		}
	};
	buyUpgrade = (uId,effectId) =>{
		if(this.state.upgrades[uId]===1)
				return;

		let upgCost = this.state.upgCosts[uId];
		if(this.state.money>=upgCost)
		{
			let newUpgs=this.state.upgrades;
			newUpgs[uId]=1;

			let effectPow=usedModule.logic.upgradeList[uId].effectPow;

			switch(effectId)
			{
				case 0:
					this.changeClickPower(effectPow);
				break;
				case 1:
					this.changeProfitMult(effectPow);
				break;
				case 2:
					this.changeClickPowerMult(effectPow);
				break;
				case 3:
					this.changeCostMult(effectPow);
				break;
				case 4:
					this.changeBuildCostMult(effectPow);
				break;
				case 5:
					this.changeUpgCostMult(effectPow);
				break;
				case 6:
					this.changeTickTime(effectPow);
				break;
			}

			let newMoney=this.state.money;
			newMoney-=upgCost;
			this.setState({
				money:newMoney,
			});
		}
	};
	mainClick = () => {
		let newMoney=this.state.money+this.state.clickPower*this.state.clickPowerMult;
		let newMaxMoney= this.state.maxMoney > newMoney ? this.state.maxMoney : newMoney;

		this.setState({
			money: newMoney,
			click: this.state.click+1,
			maxMoney: newMaxMoney,
		});
	};
	addMoney = () => {
		let newMoney=Math.round((this.state.money+this.state.moneySec)*1000)/1000;
		newMoney=Math.round(newMoney*100)/100;
		let newMaxMoney= this.state.maxMoney > newMoney ? this.state.maxMoney : newMoney;

		this.setState({
			money: newMoney,
			lastClick: this.state.click,
			click: 0,
			maxMoney: newMaxMoney,
		});
	};
	changeLanguage = () => {
		if(this.state.lang==="polish")
		{
			this.setState({
				lang: "english",
			});
		}
		else if(this.state.lang==="english")
		{
			this.setState({
				lang: "polish",
			});
		}

		texts=module[this.state.lang];
	};
	saveData = () => {
		localStorage.money=this.state.money;
		localStorage.moneySec=this.state.moneySec;
		localStorage.maxMoney=this.state.maxMoney;
		localStorage.buildings=this.state.buildings;
		localStorage.buildCosts=this.state.buildCosts;
		localStorage.prod=this.state.prod;
		localStorage.upgrades=this.state.upgrades;
		localStorage.upgCosts=this.state.upgCosts;
		localStorage.clickPower=this.state.clickPower;
		localStorage.clickPowerMult=this.state.clickPowerMult;
		localStorage.profitMult=this.state.profitMult;
		localStorage.costMult=this.state.costMult;
		localStorage.buildCostMult=this.state.buildCostMult;
		localStorage.upgCostMult=this.state.upgCostMult;
		localStorage.tickTime=this.state.tickTime;
		localStorage.lastSave=Date.now();
	};
	loadData = () => {
		let loc=localStorage;
		this.setState({
			money:parseFloat(loc.money),
			moneySec:parseFloat(loc.moneySec),
			maxMoney:parseFloat(loc.maxMoney),
			buildings:localStorage.buildings.split(",").map(el => parseInt(el)),
			buildCosts:localStorage.buildCosts.split(",").map(el => parseInt(el)),
			prod:localStorage.prod.split(",").map(el => parseInt(el)),
			upgrades:localStorage.upgrades.split(",").map(el => parseInt(el)),
			upgCosts:localStorage.upgCosts.split(",").map(el => parseInt(el)),
			clickPower:parseFloat(loc.clickPower),
			clickPowerMult:parseFloat(loc.clickPowerMult),
			profitMult:parseFloat(loc.profitMult),
			costMult:parseFloat(loc.costMult),
			buildCostMult:parseFloat(loc.buildCostMult),
			upgCostMult:parseFloat(loc.upgCostMult),
			tickTime:parseFloat(loc.tickTime),
		});
	};
	clearData = () => {
		localStorage.clear();
	};
	componentDidMount()
	{
		if(localStorage.money!==undefined)
			this.loadData();
		let intervalId=setInterval(this.addMoney,this.state.tickTime);
		let save=setInterval( () => {this.saveData; console.log("Zapisano!");},60000);
		this.setState({
			interval:intervalId,
			saveInterval:save,
		});
	}
	render()
	{
		let texts=usedModule[this.state.lang];
		return  <div 	className="app row"
						style={{backgroundImage:"url("+usedModule.logic.imgs.background+")"}}>
					<div className="mainScreen col-8">
						<button onClick={this.changeLanguage}>{texts.changeLanguage}</button>
						<button onClick={this.saveData}>{texts.save}</button>
						<button onClick={this.loadData}>{texts.load}</button>
						<button onClick={this.clearData}>{texts.reset}</button>
						<h1 className="money">{texts.money}: {this.state.money.toFixed(2)}</h1>
						<h2 className="moneySec">{texts.moneyOnSec}: {(this.state.moneySec*(1000/this.state.tickTime)).toFixed(2)}</h2>
						<h3 className="clicksSec">{texts.clicksOnSec}: {this.state.lastClick}</h3>
						<h4>{texts.maxMoney}: {this.state.maxMoney.toFixed(2)}</h4>
						<MainView methodClick={this.mainClick}/>
					</div>
					<div className="buy col-4">
						<Shop   buildings={this.state.buildings}
								methodClick={this.buyBuilding}
								methodClickMax={this.buyMaxBuilding}
								buildCosts={this.state.buildCosts}
								prof={this.state.prod}
								profitMult={this.state.profitMult}
								money={this.state.money}
								maxMoney={this.state.maxMoney}
								lang={this.state.lang}/>
						<UpgradeList    methodClick={this.buyUpgrade}
										upgCosts={this.state.upgCosts}
										upgrades={this.state.upgrades}
										money={this.state.money}
										maxMoney={this.state.maxMoney}
										lang={this.state.lang}/>
					</div>
				</div>;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<App/>,
		document.getElementById('app')
	);
});
