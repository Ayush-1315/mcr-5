const recipies=[
    {
        _id:"2e2b3751-c280-4ab4-aff5-96db94fe964f",
        recipie:"Spaghetti Bolognese",
        cusineType:"Italian",
        ingredients:["all-purpose flour"," baking soda","salt", "unsalted butter", "granulated sugar","brown sugar","vanilla extract", "eggs","chocolate chips"],
        instructions:["Preheat oven to 375 degree C","In a small bowl, whisk together flour, baking soda and salt","In large bowl, cream together butter,granulated sugar, brown sugar, and vanilla extract until light and fluffy.","Beat in eggs, one at a time,until well combined","Gradually add the flour mixtureto the butter mixture,slimming until just combined.","Stir in chocolate chips.","Drop rounded tablespoons of dough into ungreased baking sheets.","Bake for 9 to 11 minutes or until Golden Brown","let the cookies cool on the baking sheets for a few minutes, then transfer to wire racks to cool completely."],
        recipieImage:"https://thesecretsuppersociety.com/wp-content/uploads/2022/03/spagetti-carbonara.jpg"
    },
    {
        _id:"d67823ba-a373-42ef-9d18-c2b7c0f316a0",
        recipie:"Chicken Stir Fry",
        cusineType:"Chinese",
        ingredients:["all-purpose flour"," baking soda","salt", "unsalted butter", "chicken","brown sugar","vanilla extract", "eggs","chocolate chips"],
        instructions:["Preheat oven to 375 degree C","In a small bowl, whisk together flour, baking soda and salt","In large bowl, cream together butter,granulated sugar, brown sugar, and vanilla extract until light and fluffy.","Beat in eggs, one at a time,until well combined","Gradually add the flour mixtureto the butter mixture,slimming until just combined.","Stir in chocolate chips.","Drop rounded tablespoons of dough into ungreased baking sheets.","Bake for 9 to 11 minutes or until Golden Brown","let the cookies cool on the baking sheets for a few minutes, then transfer to wire racks to cool completely."],
        recipieImage:"https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1.jpg"
    },
    {
        _id:"4e82dc7e-8828-4cab-9381-1858b60c8f1b",
        recipie:"Chocolate Chip Cookies",
        cusineType:"American",
        ingredients:["all-purpose flour"," baking soda","salt", "unsalted butter", "granulated sugar","brown sugar","vanilla extract", "eggs","chocolate chips"],
        instructions:["Preheat oven to 375 degree C","In a small bowl, whisk together flour, baking soda and salt","In large bowl, cream together butter,granulated sugar, brown sugar, and vanilla extract until light and fluffy.","Beat in eggs, one at a time,until well combined","Gradually add the flour mixtureto the butter mixture,slimming until just combined.","Stir in chocolate chips.","Drop rounded tablespoons of dough into ungreased baking sheets.","Bake for 9 to 11 minutes or until Golden Brown","let the cookies cool on the baking sheets for a few minutes, then transfer to wire racks to cool completely."],
        recipieImage:"https://thesecretsuppersociety.com/wp-content/uploads/2022/03/spagetti-carbonara.jpg"
    },
];
export const initialState={
    recipies:[...recipies],
    searchBy:"",
    search:""
}
export const reducerFun=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "SET_RECIPIE":return {...state,recipies:payload}
        case "ADD_RECIPIE": return {...state,recipies:[...state.recipies,payload]};
        case "REMOVE_RECIPIE":return {...state,recipies:state.recipies.filter(({_id})=>_id!==payload)}
        case "SEARCH_BY":return {...state,searchBy:payload}
        case "SEARCH":return {...state,search:payload}
        default:return state;
    }
}