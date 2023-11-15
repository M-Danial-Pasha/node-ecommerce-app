import Category from "../models/category.model";
import {
    isNullOrUndefined,
    isString,
    isStringNotEmpty
} from "../Services/dataValidations.service.js";

const addCategory = async (req, res) => {

    const { name } = req.body;

    if(!isNullOrUndefined(name)) {
        return res.status(400).json({ error: "Required Data is missing", success: false });
    }

    if(!isString(name)) {
        return res.status(400).json({ error: "Wrong Data Type", success: false });
    }

    if(!isStringNotEmpty(name)) {
        return res.status(400).json({ error: "Category cannot be empty", success: false });
    }

    try {

        const response = await Category.create({
            name: name
        });

        if(response){
            return res.status(201).json({ message: "Category created successfully", success: true, category: response });
        }
        
    } catch (error) {
        console.log(`Error Occured: ${error}`);
        return res.status(400).json({ error: `Something went wrong while creating a category: ${error}`, success: false });
    }

}

const updateCategory = async (req, res) => {
    const { id, name } = req.body;

    if(!isNullOrUndefined(name) || !isNullOrUndefined(id)) {
        return res.status(400).json({ error: "Required Data is missing", success: false });
    }

    if(!isString(name) || !isString(id)) {
        return res.status(400).json({ error: "Wrong Data Type", success: false });
    }

    if(!isStringNotEmpty(name) || !isStringNotEmpty(id)) {
        return res.status(400).json({ error: "Category cannot be empty", success: false });
    }

    try {

        const response = await Category.findByIdAndUpdate({ _id: id }, {
            name
        });

        if(response){
            return res.status(200).json({ message: "Category updated successfully", success: true, category: response });
        }
        
    } catch (error) {
        console.log(`Error Occured: ${error}`);
        return res.status(400).json({ error: `Something went wrong while updating a category: ${error}`, success: false });
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.body;

    if(!isNullOrUndefined(id)) {
        return res.status(400).json({ error: "Required Data is missing", success: false });
    }

    if(!isString(id)) {
        return res.status(400).json({ error: "Wrong Data Type", success: false });
    }

    if(!isStringNotEmpty(id)) {
        return res.status(400).json({ error: "Category cannot be empty", success: false });
    }

    try {

        await Category.findByIdAndDelete({ _id: id });

        return res.status(200).json({ message: "Category deleted successfully", success: true });
        
    } catch (error) {
        console.log(`Error Occured: ${error}`);
        return res.status(400).json({ error: `Something went wrong while deleting a category: ${error}`, success: false });
    }
}

const getAllCategories = async (req, res) => {
    
    try {

        const response = await Category.find({}).limit(100);

        if(response) {
            return res.status(200).json({ message: "Get All Categories", success: true, categories: response });
        }
        
    } catch (error) {
        console.log(`Error Occured: ${error}`);
        return res.status(400).json({ error: `Something went wrong while getting all categories: ${error}`, success: false });
    }
}

const getSingleCategory = async (req, res) => {
    const { id } = req.body;

    if(!isNullOrUndefined(id)) {
        return res.status(400).json({ error: "Required Data is missing", success: false });
    }

    if(!isString(id)) {
        return res.status(400).json({ error: "Wrong Data Type", success: false });
    }

    if(!isStringNotEmpty(id)) {
        return res.status(400).json({ error: "Category cannot be empty", success: false });
    }

    try {

        const response = await Category.findById({ _id: id });
        if(response) {
            return res.status(200).json({ message: "Get Single Category", success: true, category: response });
        }
        
    } catch (error) {
        console.log(`Error Occured: ${error}`);
        return res.status(400).json({ error: `Something went wrong while getting single category: ${error}`, success: false });
    }
}

export {
    addCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getSingleCategory
}