import React, { Component} from 'react';

class Hint extends Component{

  constructor(props){
    super(props);
    this.collEleSection = React.createRef();
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(e){
    let collapseEle = this.collEleSection.current;
    // toggle the classname
    let className = collapseEle.className === 'collapse' ? 'show' : 'collapse';
    collapseEle.className = className;
  }

  render(){
      return(
          <div className="hintSection">
            <a href="#" onClick={this.toggleCollapse} role="button" > Memory Functional Hint ?</a>
            <div className="collapse"  ref={this.collEleSection}>
               <div className="card card-body">
                <ul>
                  <li>MC = Memory Clear sets the memory to 0</li>
                  <li>MR = Memory Recall uses the number in memory, acts as if you had keyed in that number yourself</li>
                  <li>MS = Memory Store puts the number on the display into the memory</li>
                  <li>M+ = Memory Add takes the number on the display, adds it to the memory, and puts the result into memory</li>
                  <li>Example:</li>
                  <li>5 x 6 = (calculator says 30)</li>
                  <li>MS (stores 30 in memory)</li>
                  <li>12 x 2 = (calculator says 24)</li>
                  <li>M+ (takes 24, adds it to 30, stores result 54 in memory)</li>
                  <li>3 x 7 = (21)</li>
                  <li>M+ (takes 54, adds 21, stores the result 75)</li>
                  <li>MR (displays the result 75)</li>
                </ul>
              </div>
            </div>
          </div>
      )
    }
}

export default Hint;
