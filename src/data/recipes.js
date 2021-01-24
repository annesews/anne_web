const data =[
    {'id': 0, 'title': 'Butter Chicken', 'cat': 'lunch', 'inst': ['heat oil and add onions', 'cook until golden brown', 'add garlic, chicken and spices and cook on medium for 20 min', 'add crushed tomatoes and sour cream, then simmer for another 20 min'], 'ingr': ['3 cloves chopped garlic', '1/2 tsp salt', '1 1/2 cup chopped onions', '1 lb boneless chicken thighs', '3/4 tsp cardamom powder', '3/4 tsp cumin', '3/4 tsp coriander', '3/4 tsp cayenne pepper', '3/4 tsp tumeric', '2 tblsp oil', '3/4 cup sour cream', '3/4 cup crushed tomatoes'], 'desc':'butter chicken serves 4 apparently'},
    {'id': 1, 'title': 'Tomaten Kip', 'cat': 'lunch', 'inst': [], 'ingr': ['2 pkg chicken', '1 tblsp tomato paste', '2 maggi cubes', 'black pepper', 'garlic', '1 stick butter', 'onions', 'tomatoes', '1 maggi', '1/2 cup water', 'green onions'], 'desc':'none'},
    {'id': 2, 'title': 'Corn Bake', 'cat': 'lunch', 'inst': ['mix all ingredients. do not drain corn', 'bake at 350f for 1hr'], 'ingr': ['1 can whole kernel corn', '1 can creamed sweet corn', '8 oz sour cream', '1 stick melted butter', '2 eggs', '1/2 tsp salt', '1pkg jiffy corn muffin mix'], 'desc':''},
    {'id': 3, 'title': 'test1', 'cat': 'lunch', 'inst': [], 'ingr': [], 'desc':''}
];

function getById(id){
    var obj;
    for(let i = 0; i < data.length; i++){
        if(data[i].id === Number(id)){
            obj = data[i];
            break;
        }
    }
    if(!obj){
        return;
    }
    return obj;
}

function getByCat(cat){
    var obj = [];
    for(let i = 0; i < data.length; i++){
        if(data[i].cat === cat){
            obj.push(data[i]);
            break;
        }
    }
    return obj;
}

function getAll(){
    return data;
}



module.exports = {getById, getByCat, getAll};