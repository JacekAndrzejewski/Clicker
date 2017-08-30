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

let polishText = {
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
        "Klikacz lv.2"
    ],
    bDesc:
    [
        "Automatycznie klika za ciebie co takt",
        "Automatycznie klika za ciebie 10x co takt"
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
};

let englishText = {
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
        "Clicker lv.2"
    ],
    bDesc:
    [
        "Autoclicks once each tick",
        "Autoclicks 10x each tick"
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
};

let texts=polishText;

let buildingList=[
    {
        bId: 0,
        icon: null,        
        baseCost: 10,
        prod: 1,
    },
    {
        bId: 1,
        icon: null,       
        baseCost: 100,
        prod: 10,
    }
    ];

let upgradeList=[
    {
        uId:0,
        icon: null,
        baseCost:10,
    },
    {
        uId:1,
        icon: null,
        baseCost: 50,
    },
    {
        uId:2,
        icon: null,
        baseCost: 90,
    }
    ];





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
        return  <div className="building">
                    <img src={this.props.icon}/>
                    <h1>{this.props.name}:<span className="buildNumber">{this.props.quant}</span></h1>
                    <div>{texts.price}:{this.props.cost}</div>
                    <div>{texts.moneyOnSec}:{this.props.prof}</div>
                    {this.props.money>= this.props.cost ? <button onClick={this.handleClick}>{texts.buy}</button> : <div/>}
                    {this.props.money>= this.props.cost ? <button onClick={this.handleBuyMax}>{texts.buyMax}</button> : <div/>}
                </div>;
    }
}

class Shop extends React.Component
{
    render()
    {
        return  <ul className="shop">
                    {buildingList.map( (el,index) => 
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
                        money={this.props.money}/> : null)}
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
        this.props.methodClick(this.props.uId);
    }
    render()
    {
        let upgradeDiv= <div className="upgrade">
                            <img src={this.props.icon}/>
                            <h1>{this.props.name}</h1>
                            <div>{this.props.desc}</div>
                            <div>{texts.price}: {this.props.cost}</div>
                            <button onClick={this.handleClick}>{texts.buy}</button>
                        </div>;
        return  <div className={this.props.money >= this.props.cost ? "canBuy" : "cantBuy"}>{upgradeDiv}</div>
    }
}

class UpgradeList extends React.Component
{
    render()
    {
        return  <div className="upgradeList">
                    {upgradeList.map( (el,index) => this.props.upgrades[index]===0 && (this.props.maxMoney*2>=this.props.upgCosts[index] || index===0 )? <Upgrade
                        uId={el.uId}
                        methodClick={this.props.methodClick}
                        key={"Upgrade"+index}
                        icon={el.icon}
                        name={texts.uName[index]}
                        desc={texts.uDesc[index]}
                        cost={this.props.upgCosts[index]}
                        money={this.props.money}/> : null)}
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
                    <img
                        onClick={this.handleClick}
                        src="./img/mainImg.png"/>
                </div>;
    }
}

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        let buildArr=Array(buildingList.length).fill(0);
        let upgArr=Array(upgradeList.length).fill(0);
        let buildCosts=buildingList.map( el => el.baseCost);
        let upgCosts=upgradeList.map( el => el.baseCost);
        let prod=buildingList.map( el => el.prod);

        this.state={
            lang: "polish",
            money:0,
            moneySec:0,
            buildings: buildArr,
            buildCosts: buildCosts,
            prod: prod,
            upgrades: upgArr,
            upgCosts: upgCosts,
            clickPower: 1,
            clickPowerMult: 1,
            profitMult: 1,
            costMult: 1,
            costIncr: 1.1,
            click: 0,
            lastClick: 0,
            tickTime: 1000,
            maxMoney: 0,
        };
    }
    buyBuilding = bId =>{
        let buildCost=  this.state.buildCosts[bId];
        let nextBuildCost=  Math.floor(this.state.costMult*
                            Math.pow(this.state.costIncr+bId*0.02,this.state.buildings[bId]+1)*
                            buildingList[bId].baseCost);

        if(this.state.money>=buildCost)
        {
            let newBuild=this.state.buildings;
            newBuild[bId]+=1;

            let newMoney=this.state.money-buildCost;

            let profits=buildingList.map( (el,index) => this.state.prod[index]*this.state.buildings[index]);
            let profit=profits.reduce( (prev,curr) => prev+curr ,0)*this.state.profitMult;

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
                            buildingList[bId].baseCost);
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
                                buildingList[bId].baseCost);
            }
            let newBuildCost=this.state.buildCosts;
            newBuildCost[bId]=buildCost;

            let profits=buildingList.map( (el,index) => this.state.prod[index]*this.state.buildings[index]);
            let profit=profits.reduce( (prev,curr) => prev+curr ,0)*this.state.profitMult;

            this.setState({
                buildings: newBuild,
                money: money,
                moneySec: profit,
                buildCosts: newBuildCost,
            });
        }
    };
    buyUpgrade = uId =>{
        if(this.state.upgrades[uId]===1)
                return;

        let upgCost = this.state.upgCosts[uId];
        if(this.state.money>=upgCost)
        {
            let newUpgs=this.state.upgrades;
            newUpgs[uId]+=1;

            switch(uId)
            {
                case 0:
                    this.setState({clickPower:this.state.clickPower+1,});
                break;
                case 1:
                    this.setState({clickPower:this.state.clickPower+2,});
                break;
                case 2:
                    let newProfMult=this.state.profitMult*1.5;

                    let profits=buildingList.map( (el,index) => this.state.prod[index]*this.state.buildings[index]);
                    let profit=profits.reduce( (prev,curr) => prev+curr,0)*newProfMult;

                    this.setState({
                        moneySec:profit,
                        profitMult:newProfMult,
                    });
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
        let newMoney=this.state.money+this.state.moneySec;
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
            texts=englishText;
        }
        else if(this.state.lang==="english")
        {
            this.setState({
                lang: "polish",
            });
            texts=polishText;
        }
    }
    componentDidMount()
    {
        let intervalId=setInterval(this.addMoney,this.state.tickTime);
    }
    render()
    {
        return  <div className="app">
                    <div className="mainScreen">
                        <button onClick={this.changeLanguage}>{texts.changeLanguage}</button>
                        <h1 className="money">{texts.money}: {this.state.money}</h1>
                        <h2 className="moneySec">{texts.moneyOnSec}: {this.state.moneySec}</h2>
                        <h3 className="clicksSec">{texts.clicksOnSec}: {this.state.lastClick}</h3>
                        <h4>{texts.maxMoney}: {this.state.maxMoney}</h4>
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
                                maxMoney={this.state.maxMoney}/>
                        <UpgradeList    methodClick={this.buyUpgrade}
                                        upgCosts={this.state.upgCosts}
                                        upgrades={this.state.upgrades}
                                        money={this.state.money}
                                        maxMoney={this.state.maxMoney}/>
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