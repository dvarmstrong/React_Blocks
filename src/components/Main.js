import React from 'react';
import styles from './Style.module.css';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

const Main = (props) => {

    return(
        <div>
            <div  className={styles.Main}> 
                <Subcontent />
                <Subcontent />
                <Subcontent />
                
            </div>
            <div>
                <Advertisement />
            </div>
               
            
               
                
        </div>
            
            

  
         
            
        );

    

};

export default Main;