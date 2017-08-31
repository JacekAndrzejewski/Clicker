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

let module= {
	polish: 
	{
		changeLanguage: "Zmień język",
		money:          "Kliknięcia",
		moneyOnSec:     "Zysk/sek",
		clicksOnSec:    "Kliknięcia/sek",
		maxMoney:       "Max kasy",
		price:          "Cena",
		buy:            "Kup",
		buyMax:         "Kup Max",
		tick:           "Takt", 
		bName:
		[
			"Klikacz lv.1",
			"Klikacz lv.2",
			"Klikacz lv.3",
		],
		bDesc:
		[
			"Automatycznie klika za ciebie co takt z połową siły",
			"Automatycznie klika za ciebie 2x co takt",
			"Automatycznie klika za ciebie 5x co takt"
		],
		uName:
		[
			"Lepsze Klikanie",
			"Lepsiejsze Klikanie",
			"Oprocentowanie"
		],
		uDesc:
		[
			"Klikanie daje o 1 kliknięcie więcej!",
			"Klikanie daje o kolejne 2 kliknięcia więcej!",
			"Zyski z autoklikania są zwiększone o 50%!"
		],
	},
	english: 
	{
		changeLanguage: "Change Language",
		money:          "Money",
		moneyOnSec:     "Money/sec",
		clicksOnSec:    "Clicks/sec",
		maxMoney:       "Max money",
		price:          "Price",
		buy:            "Buy",
		buyMax:         "Buy max",
		tick:           "Tick",
		bName:
		[
			"Clicker lv.1",
			"Clicker lv.2",
			"Clicker lv.3",
		],
		bDesc:
		[
			"Autoclicks once each tick with lesser force",
			"Autoclicks 2x each tick",
			"Autoclicks 5x each tick",
		],
		uName:
		[
			"Better Clicking",
			"Bettest Clicking",
			"Interest"
		],
		uDesc:
		[
			"Clicking on your own gives 1 money more!",
			"Clicking on your own gives another 2 money more!",
			"Autoclicking gives 50% more money!"
		],
	}
};

let necromancerClicker= {
	logic:
	{
		buildingList:
		[
			{
				bId: 0,
				icon: null,        
				baseCost: 15,
				prod: 1,
			},
			{
				bId: 1,
				icon: null,       
				baseCost: 50,
				prod: 3,
			},
			{
				bId: 2,
				icon: null,
				baseCost: 250,
				prod: 5
			}
		],
		upgradeList:
		[
			{
				uId:0,
				icon: null,
				baseCost:10,
				effectId: 0,
				effectPow: 1,
			},
			{
				uId:1,
				icon: null,
				baseCost: 50,
				effectId: 0,
				effectPow: 2,
			},
			{
				uId:2,
				icon: null,
				baseCost: 90,
				effectId: 1,
				effectPow: 1.5,
			},
			{
				uId:3,
				icon:null,
				baseCost:10,
				effectId:3,
				effectPow:0.5,
			},
			{
				uId:4,
				icon:null,
				baseCost:10,
				effectId:4,
				effectPow:0.5,
			},
			{
				uId:5,
				icon:null,
				baseCost:10,
				effectId:5,
				effectPow:0.5,
			},
			{
				uId:6,
				icon:null,
				baseCost:10,
				effectId:6,
				effectPow:0.5,
			},
		],
	},
	polish: 
	{
		changeLanguage: "Zmień język",
		money:          "Kliknięcia",
		moneyOnSec:     "Zysk/sek",
		clicksOnSec:    "Kliknięcia/sek",
		maxMoney:       "Max kasy",
		price:          "Cena",
		buy:            "Kup",
		buyMax:         "Kup Max",
		tick:           "Takt", 
		bName:
		[
			"Klikacz lv.1",
			"Klikacz lv.2",
			"Klikacz lv.3",
		],
		bDesc:
		[
			"Automatycznie klika za ciebie co takt z połową siły",
			"Automatycznie klika za ciebie 2x co takt",
			"Automatycznie klika za ciebie 5x co takt"
		],
		uName:
		[
			"Lepsze Klikanie",
			"Lepsiejsze Klikanie",
			"Oprocentowanie"
		],
		uDesc:
		[
			"Klikanie daje o 1 kliknięcie więcej!",
			"Klikanie daje o kolejne 2 kliknięcia więcej!",
			"Zyski z autoklikania są zwiększone o 50%!"
		],
	},
	english: 
	{
		changeLanguage: "Change Language",
		money:          "Minions",
		moneyOnSec:     "Minions/sec",
		clicksOnSec:    "Resurrections/sec",
		maxMoney:       "Max minions",
		price:          "Minions needed",
		buy:            "Attack",
		buyMax:         "Attack max",
		tick:           "Tick",

		bName:
		[
			"Lonely wanderer",
			"Grave",
			"Graveyard",
			"Village",
			"City",
			"Fort",
			"Castle",
			"Country",
			"Dimension"
		],
		bDesc:
		[
			"He was changed into zombie, now he helps you get more minions!",
			"Good place to look for a corpse to resurrect",
			"Many graves = many corpses!",
			"Overtaken village",
			"City",
			"Fort",
			"Castle",
			"Country",
			"Dimension"
		],
		uName:
		[
			"Better incantations",
			"Black Book",
			"Armored minions",
			"CostLow",
			"BuildCostLow",
			"UpgCostLow",
			"TickLow"
		],
		uDesc:
		[
			"Some shady guy offered you a scroll with incantations. Thanks to it you resurrect 1 minion more at once!",
			"You heard about some good ol' necromancer stuff in a guarded crypt. You heard it allows to resurrect another 2 minions more at once!",
			"You bought buckets for your minions. Their head is safer and they are 50% tougher thanks to your amazing thinking skills",
			"Bla"
		],
	}
};

let usedModule=necromancerClicker;
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
		return  <div className="building">
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
		return  <ul className="shop">
					{usedModule.logic.buildingList.map( (el,index) => 
						this.props.maxMoney*2>=this.props.buildCosts[index] || index===0 ? <Building
						bId={el.bId}
						methodClick={this.props.methodClick}
						methodClickMax={this.props.methodClickMax}
						key={"Building"+index}
						name={texts.bName[index]}
						desc={texts.bDesc[index]}
						src={el.icon}
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
		let upgradeDiv= <div className="upgrade">
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
		return  <div className="upgradeList">
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
						onClick={this.handleClick}
						style={{backgroundImage: "url('./img/mainImg.png')",
								backgroundSize: "contain"}}/>
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
		this.setState({costMult:this.state.costMult*n});
		this.calcCosts(this.state.costMult*n,this.state.buildCostMult,this.state.upgCostMult);
	};
	changeBuildCostMult = n => {
		this.setState({buildCostMult:this.state.buildCostMult*n});
		this.calcCosts(this.state.costMult,this.state.buildCostMult*n,this.state.upgCostMult);
	};
	changeUpgCostMult = n => {
		this.setState({upgCostMult:this.state.upgCostMult*n});
		this.calcCosts(this.state.costMult,this.state.buildCostMult,this.state.upgCostMult*n);
	};
	changeTickTime = n => {
		this.setState({tickTime:this.state.tickTime*n,});
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
	}
	componentDidMount()
	{
		let intervalId=setInterval(this.addMoney,this.state.tickTime);
	}
	render()
	{
		let texts=usedModule[this.state.lang];
		return  <div className="app">
					<div className="mainScreen">
						<button onClick={this.changeLanguage}>{texts.changeLanguage}</button>
						<h1 className="money">{texts.money}: {this.state.money.toFixed(2)}</h1>
						<h2 className="moneySec">{texts.moneyOnSec}: {(this.state.moneySec*(1000/this.state.tickTime)).toFixed(2)}</h2>
						<h3 className="clicksSec">{texts.clicksOnSec}: {this.state.lastClick}</h3>
						<h4>{texts.maxMoney}: {this.state.maxMoney.toFixed(2)}</h4>
						<MainView methodClick={this.mainClick}/>
					</div>
					<div className="buy">
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