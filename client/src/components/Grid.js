import React, {Component} from "react"
import "../App.css";
import Box from './Box'
import Stop from './Stop'
import Truck from './Truck'

class Grid extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {
            legs: [],
			stops: [],
            truckPosition: {x: 0, y: 0},
            tempX: '0',
            tempY: '0',
            stopToggle: false,
            startingCellNum:39814,
            previousX: 0,
            previousY: 0,
		};

	}
    // move truck using grid
    move(xVal,yVal){
        // console.log('x', this.state.truckPosition.x)
        // get corner box
        // var startStop = document.querySelector('.box-container:nth-of-type(39801)')

        let startStop = this.state.startingCell
        startStop.style["grid-column-start"] = xVal
        startStop.style["grid-column-end"] = xVal
        startStop.style["grid-row-start"] = this.adjustRowMovement(yVal)
        startStop.style["grid-row-end"] = this.adjustRowMovement(yVal)
        // add input to state val

        xVal = parseInt(this.state.truckPosition.x) + parseInt(xVal)
        yVal= parseInt(this.state.truckPosition.y) + parseInt(yVal)
            console.log('y', this.state.truckPosition.y)
            console.log('x', this.state.truckPosition.x)
            // set x, y, and starting
            this.setState({
                truckPosition: {
                    x: xVal,
                    y: yVal
                },
        })
    }
    // to make button work
    clickStops(){
        this.setState({
            stopToggle: !this.stopToggle
        })
    }
    // takes and x/y and returns px to move
    convertToPixels(x,y){
        let totalX
        let totalY
        // first 10 cells = 100px
        // after that everythig 11px
        // - minus cells add 100px
        // - rest * 11 then sum
        if(x > 10){
            x = x - 10
            totalX = 100 + (x * 11)
        } else {
            totalX = x * 10
        }
        if(y > 10){
            y = y - 10
            totalY = 100 + (y * 11)
        } else {
            totalY = y * 10
        }
        let moveX = parseInt(totalX)
        let moveY = parseInt(totalY)
        // console.log('mx', moveX)
        // console.log('my', moveY)
        let coordsObj = {
            moveX: moveX,
            moveY: moveY
        }
        // this.setState({})
        return coordsObj
    }
    colorGrid(x, y){
        // x = 0
        // y = 10
        console.log(`{x:${x}, y:${y}}`)
        let tempX = x
        let tempY = y

        // gets set on mount
        // let startingCell = this.state.startingCell
        let startingCell = document.querySelector('.box-container:nth-of-type(38033')

        // x of coords is === -bottom
        //test -// {x: 20, y: 30}
    // **CONVERT TO PIXELS**

            // let startPosBottom = this.posInParent(startingCell, this.state.grid).bottom
            // console.log('s', startPosBottom)
            // // convert stop to pixels
            //
            // let coords = this.convertToPixels(x, y)
            // console.log(coords)
            // // divide by 11 - cells above starting to go
            // let yCells = Math.ceil(coords.moveY / 11  )
            // let xCells = Math.ceil(coords.moveX / 11)
            // console.log('y', yCells)
            // console.log('x', xCells)
            // let xCells = 10  //y
            // let yCells =  40 //x

            let tempCellNum = this.state.startingCellNum
            console.log('startingCell', this.tempCellNum)
    // **DIVIDE y /x to get num to move y each row up

            // let greater
            // (x >= y ? greater = x : greater = y)


            // get num to move for 2nd move and up
            function numToMove(){
                let moveX = Math.abs(this.state.previousX - x)
                let moveY = Math.abs(this.state.previousY - y)
                return {
                    moveX: moveX,
                    moveY: moveY
                }
            }
                // color current cell - on first one
                if(this.state.previousX === 0 && this.state.previousY  === 0){
                    document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                    .style.backgroundColor = 'purple'
                    tempX = tempX - 1
                    tempY = tempY - 1
                }
                // console.log('start tx',tempX)
                // console.log('start ty',tempY)
                // console.log('startX', x)
                // console.log('prevX', this.state.previousX)
                //
                // console.log('startY', y)
                // console.log('prevY', this.state.previousY)
                while(tempX && tempY){
                    // console.log('tx',tempX)
                    // console.log('ty',tempY)
                    // if last was les than current- do this
                    if(this.state.previousY < y){
                        tempCellNum = tempCellNum - 200
                        // console.log('temp', tempCellNum)
                        document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                        .style.backgroundColor = 'purple'
                        // if last was greater than current- do this

                    } else if(this.state.previousY > y){
                        tempCellNum = tempCellNum + 200
                        // console.log('temp', tempCellNum)
                        document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                        .style.backgroundColor = 'purple'
                    }

                    if(this.state.previousX < x){
                        tempCellNum = tempCellNum + 1
                        // console.log('temp', tempCellNum)
                        document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                        .style.backgroundColor = 'yellow'
                        // if last was greater than current- do this
                    } else if(this.state.previousX > x){
                        tempCellNum = tempCellNum - 1
                        // console.log('temp', tempCellNum)
                        document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                        .style.backgroundColor = 'yellow'
                    }



                    // document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                    // .style.backgroundColor = 'yellow'
                    //
                    // tempCellNum = tempCellNum + 1
                    // console.log('y', tempY)
                    tempX = tempX - 1
                    tempY = tempY - 1
                }
                // console.log('cell', tempCellNum)
                let loopAxis
                (tempY ? loopAxis = tempY : loopAxis = tempX)
                console.log('loopAxis', loopAxis)
                for (var i = 0; i < loopAxis; i++) {
                    if(tempY){
                        if(this.state.previousY < y){
                            console.log('up',tempCellNum)
                            tempCellNum = tempCellNum - 200
                            // console.log('temp', tempCellNum)
                            document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                            .style.backgroundColor = 'purple'
                        } else if(this.state.previousY > y){
                            tempCellNum = tempCellNum + 200
                            // console.log('temp', tempCellNum)
                            document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                            .style.backgroundColor = 'purple'
                        }
                    } else if(tempX){
                        // console.log('tempx',tempX)
                        if(this.state.previousX < x){
                            tempCellNum = tempCellNum + 1
                            // console.log('temp', tempCellNum)
                            document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                            .style.backgroundColor = 'yellow'
                            // if last was greater than current- do this
                        } else if(this.state.previousX > x){
                            tempCellNum = tempCellNum - 1
                            // console.log('temp', tempCellNum)
                            document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                            .style.backgroundColor = 'yellow'
                        }
                    }
                }
                console.log(tempCellNum)
                this.setState({
                    previousX: x,
                    previousY: y,
                    startingCell: tempCellNum
                })

                    // else add 200 first
                    // tempCellNum = tempCellNum - 200
                    // document.querySelector(`.box-container:nth-of-type(${tempCellNum}`)
                    // .style.backgroundColor = 'purple'


            // function handleYmvmt(input){
            //     // if(input === 0){
            //         document.querySelector(`.box-container:nth-of-type(${tempCellNum}`).style.backgroundColor = 'yellow'
            //         tempCellNum = tempCellNum + 1
            //
            // // moves in between the dominant direction

        // }
    }
    // get position of cell inside parent
    posInParent(child, parent){
        let childrenPos = parent.getBoundingClientRect()
        let parentPos = parent.getBoundingClientRect()
    	let relativePos = {}

        relativePos['top'] = childrenPos.top - parentPos.top
        relativePos['right'] = childrenPos.right - parentPos.right
        relativePos['bottom'] = childrenPos.bottom - parentPos.bottom
        relativePos['left'] = childrenPos.left - parentPos.left

        return relativePos
    }
    testColor(){
        // setTimeout(function(){
        let stops = [
            {x:20, y:10},
            {x: 20, y: 20},
        ]
            stops.map((stop, index) => {
                let that = this
                console.log(that)
                setTimeout(function(){
                    return that.colorGrid(stop.x, stop.y)

                },100*(index))
            })
        // },5000)

    }
    render() {
        // {this.state.stopCoords ? <this.ShowMarker move={this.state}/> : null}
    	return(
            <div>
                <div className="grid-container">
                    <div className="grid">
                    <Truck />
                    <Stop coords={this.state.stopsDirsArr}/>
                    <Box num={40000} />
                        {(this.state.stopToggle ? <Stop coords={this.state}/> : null)}
                    </div>

                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                     X-coords: <input className="x-coord" type="text" value={this.state.tempX} onChange={evt => this.updateXvalue(evt)} >
                     </input>
                     Y-coords: <input className="y-coord" type="text" value={this.state.tempY} onChange={evt => this.updateYvalue(evt)}  ></input>
                     <input type="submit" value="Submit" onMouseOver={this.getState.bind(this)}></input>

                </form>
                <button onClick={this.testColor.bind(this)}>Plot</button>
            </div>
        )
    }
    // to adjust to move from bottom up
    adjustRowMovement(y){
        let total = 200
        let adjust = (total - y) + 1
        // console.log('a', adjust)
        return adjust
    }
    // hold vals in input until next entered
    updateXvalue(evt) {
        this.setState({
            tempX: evt.target.value
        })
        // console.log(`temp x: ${this.state.tempX}`)

    }
    updateYvalue(evt) {
        this.setState({
            tempY: evt.target.value
        })
        console.log(`temp y: ${this.state.tempY}`)

    }
    handleSubmit(event) {
        // console.log(`temp x: ${this.state.tempX}`)
        // console.log(`temp y: ${this.state.tempY}`)
        this.move(this.state.tempX, this.state.tempY)
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    componentDidMount() {

        let that = this


        // types are 'stop' and 'driver' - driver needs calcs
        function setStopCoords(type){
            let coordsArr = []
            setTimeout(function(){
                // filter out undefined
                if(type === 'stop'){
                    if(that.state.stops.length > 0){
                        that.state.stops.forEach(stop => {
                            // make vals negative
                            // stop.x = -1 * stop.x
                            // stop.y = -1 * stop.y
                            let pixels = that.convertToPixels(
                                stop.x, stop.y
                            )
                            let coords = {
                                pixels: pixels,
                                directions: {
                                    xDir: "left",
                                    yDir: "bottom"
                                }
                            }
                            // console.log('coords', coords)
                            coordsArr.push(coords)
                        })
                    }
                } else if(type === 'truck'){
                    // to calc

                }
                    console.log(coordsArr)
                    that.setState({
                        stopsDirsArr: coordsArr
                    })


            },1050)
        }
        setStopCoords('stop')
        // set the cell size to know how to move
        // loop over stops
        // pass in x, y and get direction
        // pass in x,y and width and height - set css prop and pixesl to move
        // save to obj and push to Array - set to get
        // loop over array and feed into stops
        let grid = document.querySelector('.grid')
        let startingCell = document.querySelector(`.box-container:nth-of-type(${this.state.startingCellNum})`)

        this.setState({
            grid: grid,
            startingCell: startingCell,
        })
        // Call our fetch function below once the component mounts
        this.callStops()
        .then(res => {
            this.setState({ stops: res.stops })
        })
        .catch(err => console.log(err));
        this.callLegs()
        .then(res => {
            this.setState({ legs: res.legs })
        })
        .catch(err => console.log(err));

    }
    callLegs = async () => {
        const response = await fetch('/legs');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body
    }
    callStops = async () => {
        const response = await fetch('/stops');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body
    }
    // tester func only
    getState(){
        // console.log('cell', this.state.startingCell)
        // console.log('temp x', this.state.tempX)
        // console.log('temp y', this.state.tempY)
        //
        // console.log('real x', this.state.truckPosition.x)
        // console.log('real y', this.state.truckPosition.y)
        console.log('arr', this.state.stopsDirsArr)
    }
    // directionToMove(x,y){
    //     let xDir
    //     let yDir
    //     // check if up or down / + -
    //     if(x < 0){
    //         xDir = "left"
    //     } else {
    //         xDir = "right"
    //     }
    //     if(y < 0){
    //         yDir = "top"
    //     } else {
    //         yDir = "bottom"
    //     }
    //     this.setState({
    //         xDir: xDir,
    //         yDir: yDir
    //     })
    // }
}
// to start at bottom, and minus one

// <div className="cursor">&#11044;</div>
export default Grid
