"use client"
import React, { useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import jwt_decode from "jwt-decode"

function Page({ params }) {
  const { tokenId } = params
  const [cookies, setCookie, removeCookie] = useCookies(["name"])

  const validateJwt = token => {
    try {
      let decoded = jwt_decode(token)
      return decoded
    } catch {
      return false
    }
  }

  // request auth token to backend
  const requestAuthToken = async () => {
    try {
      // validate jwt for anticipating fake jwt dont throught to backend
      if (validateJwt(tokenId)) {
        let response = await axios.get(
          `${process.env.BACKEND_URL}/auth/${tokenId}`
        )
        if (response.status == 200) {
          // example response of success
          // {'refresh': 'jwt refresh token','access': '(jwt access token)','status':True}
          setCookie("access", response.data.access, { path: "/" })
          setCookie("refresh", response.data.refresh, { path: "/" })
          return response.data
        }
      }
      // if jwt is fake, return this
      return {
        status: false,
        message: "Invalid Token"
      }
    } catch (e) {
      let response = e.response
      // example response of failed
      // {'message':'token is not valid!','status':False}
      return response.data
    }
  }


  return (
    <>
    </>
  )
}

export default Page
