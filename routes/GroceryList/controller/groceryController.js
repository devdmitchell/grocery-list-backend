const grocery = require('../model/groceryList')


const getAllGroceries = async (req, res) => {
    try {
        const allGroceries = await grocery.find({})
        res.json({message: "Found all groceries.", payload: allGroceries})
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message})
    }
}

const createGrocery = async (req, res) => {
    try {
        const { grocery, priority } = req.body
        const newGroceryItem = newGroceryItem ({ grocery, priority })
        await newGroceryItem.save()
        res.json({message: "Success! New grocery item created.", payload: newGroceryItem})
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message})
    }
}

const updateGroceryById = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message})
    }
}