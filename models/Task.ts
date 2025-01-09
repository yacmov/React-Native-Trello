import { Text, View } from "react-native";
import React, { Component } from "react";
import { BSON, ObjectSchema, Realm } from "realm";

export class Task extends Realm.Object<Task> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  description!: string;
  isComplete: boolean = false;
  createAt: Date = new Date();
  user_id!: string;

  static primaryKey = "_id";
}

export default Task;
