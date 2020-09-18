"use strict";
const { click } = require('taiko');
const assert = require("assert");
const path = require("path");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

step("Log out the customer", async function () {
    await click("Log out");    
});

step("Clear previous login", async function (message) {
    // try{
    //     assert.ok(await link("Log in").exists())
    // }catch(err){
    //     console.log("here")
    //     await click("Log out")    
    // }
});

step("Give an option to Log Out", async function () {
    await link("Log out").exists();
});