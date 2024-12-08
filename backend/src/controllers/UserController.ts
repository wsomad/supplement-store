import { Request, Response } from "express";
import UserService from "../services/UserService"

export const createUser = async (request: Request, response: Response) => {
    try {
        const user = await UserService.createUser(request.body)
        response.status(201).json(user);
    } catch (error: any) {
        response.status(400).json({message: error.message});
    }
}

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        const users = await UserService.getAllUsers();
        response.status(201).json(users);
    } catch (error: any) {
        response.status(500).json({message: error.message})
    }
}