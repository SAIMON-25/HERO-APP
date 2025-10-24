

const getLocalItem =()=>{
    const itemList = localStorage.getItem('applist');

    if(itemList){
        const arr = JSON.parse(itemList);
        return arr;
    }else{
        return [];
    }
}



const setLocalItem =(id)=>{
    const itemList = getLocalItem();
    
    if(!itemList.includes(id)){
        itemList.push(id);
    }
    else{
        return;
    }

    localStorage.setItem('applist',JSON.stringify(itemList));
}

const removeLocalItem = (id)=>{
    const itemList = getLocalItem();

    const newList = itemList.filter(item => item !=id);
    localStorage.setItem('applist',JSON.stringify(newList));
}

export {setLocalItem,getLocalItem,removeLocalItem} ;