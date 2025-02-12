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
        const updatedGrocery = await grocery.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json({ message: "Grocery item updated successfully!", payload: updatedGrocery})
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message}) 
    }
}


const deleteGroceryById = async (req, res) => {
    try {
        await grocery.findByIdAndDelete(req.params.id)
        res.json({ message: "Grocery item deleted successfully."})
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message}) 
    }
}

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGroceryById,
    deleteGroceryById
}