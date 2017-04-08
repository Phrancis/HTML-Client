"use strict"

/*
This file contains constants used throughout the client application for easy access.
 */

/**
 * Maximum character length for a username.
 * @type {number}
 */
exports.MAX_USERNAME_LENGTH = 25

/**
 * List of game servers to connect to.
 * Note that the `id` is an arbitrary number and should be unique.
 * See: https://facebook.github.io/react/docs/lists-and-keys.html#keys
 * @type {*[]}
 */
exports.GAME_SERVERS = [
  {
    id: 1,
    name: "localhost",
    url: "ws://127.0.0.1:4243"
  },
  {
    id: 2,
    name: "dwarftowers.com",
    url: "ws://dwarftowers.com:4243"
  },
  {
    id: 3,
    name: "zomis.net",
    url: "ws://stats.zomis.net:4243"
  },
  {
    id: 4,
    name: "other...",
    url: ""
  }
]