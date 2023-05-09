import { createBrowserRouter } from "react-router-dom";

//route protection HOC
import NOT_LOGGED_IN from "./not-logged-in";
import LOGGED_IN_BUT_NOT_VERIFIED from "./logged-in-but-not-verifed";
import LOGGED_IN_AND_VERIFIED from "./logged-in-and-verfied";

// pages
import LANDING___PAGE from "@/pages/_landing/_page";
import NOT_FOUND___PAGE from "@/pages/_not-found/_page";
import PRIVACY_POLICY___PAGE from "@/pages/privacy-policy/_page";
import TERMS_OF_SERVICE___PAGE from "@/pages/terms-of-service/_page";
import SIGN_UP___PAGE from "@/pages/signup/_pages";
import SIGN_IN___PAGE from "@/pages/signin/_page";
import SEND_EMAIL_VERIFICATION_MAIL___PAGE from "@/pages/send-email-verification-mail/_pages";
import SEND_PASSWORD_RESET_MAIL___PAGE from "@/pages/send-password-reset-mail/_pages";
import RESET_PASSWORD___PAGE from "@/pages/reset-password/_page";
import SOCIAL_AUTH_RESPONSE___PAGE from "@/pages/social-auth-response/_page";
import VERIFY_EMAIL___PAGE from "@/pages/verify-email/_page";
import PROFILE___PAGE from "@/pages/profile/_page";
import SEARCH_MOVIE___PAGE from "@/pages/search-movie/_page";
import MOVIE_DETAILS___PAGE from "@/pages/movie-details/_page";
import CONTENT_FLICKERING_PROTECTOR from "./content-flickering-protector";
import BOOKMARKED_MOVIES___PAGE from "@/pages/bookmarked-movies/_page";



// all routes
const allRoutes = createBrowserRouter([


    /* ✅✅ Accessible to every user ✅✅  */


    /* 🍔 Landing Page */
    {
        path: "/",
        element: <LANDING___PAGE />,
    },


    /* 🍔 Not Found Page */
    {
        path: "*",
        element: <NOT_FOUND___PAGE />,
    },


    /* 🍔 Privacy Policy */
    {
        path: "/privacy-policy",
        element: (
            <PRIVACY_POLICY___PAGE />

        )
    },


    /* 🍔 Terms of Service */

    {
        path: "/terms-of-service",
        element: (
            <TERMS_OF_SERVICE___PAGE />
        )
    },


    /* ✅✅ Couldn't make valid route protection but UI gets changed based on the user state ✅✅  */
    {
        path: "/social-auth-response",
        element: (

            <SOCIAL_AUTH_RESPONSE___PAGE />

        )
    },



    /* ✅✅ Accessible to not signed in user ✅✅  */


    /* 🍔 Sign up Page */
    {
        path: "/sign-up",
        element: (
            <NOT_LOGGED_IN>
                <SIGN_UP___PAGE />
            </NOT_LOGGED_IN>
        )
    },


    /* 🍔 Sign in Page */
    {
        path: "/sign-in",
        element: (
            <NOT_LOGGED_IN>
                <SIGN_IN___PAGE />
            </NOT_LOGGED_IN>
        )
    },


    /* 🍔 Send Password Reset Mail */
    {
        path: "/send-password-reset-mail",
        element: (

            <NOT_LOGGED_IN>
                <SEND_PASSWORD_RESET_MAIL___PAGE />
            </NOT_LOGGED_IN>

        )
    },


    /* 🍔 Reset Password */
    {
        path: "/reset-password",
        element: (
            <NOT_LOGGED_IN>
                <RESET_PASSWORD___PAGE />
            </NOT_LOGGED_IN>

        )
    },




    /* ✅✅ Accessible to signed in but not verified user ✅✅  */

    /* 🍔 Send email verification mail */
    {
        path: "/send-email-verification-mail",
        element: (
            <LOGGED_IN_BUT_NOT_VERIFIED>
                <SEND_EMAIL_VERIFICATION_MAIL___PAGE />
            </LOGGED_IN_BUT_NOT_VERIFIED>
        )
    },


    /* 🍔 Verify Email */
    {
        path: "/verify-email",
        element: (
            <LOGGED_IN_BUT_NOT_VERIFIED>
                <VERIFY_EMAIL___PAGE />
            </LOGGED_IN_BUT_NOT_VERIFIED>
        )
    },




    /* ✅✅ Accessible to signed in and verified user ✅✅  */


    /* 🍔 Profile */
    {
        path: "/profile",
        element: (
            <LOGGED_IN_AND_VERIFIED>
                <PROFILE___PAGE />
            </LOGGED_IN_AND_VERIFIED>

        )
    },



    /* ✅✅ Accessible to signed in and verified user ✅✅  */

    {
        path: "/search-movie",
        element: (
            <LOGGED_IN_AND_VERIFIED>
                <SEARCH_MOVIE___PAGE />
            </LOGGED_IN_AND_VERIFIED>

        )
    },


    {
        path: "/movie-details/:id",
        element: (
            <LOGGED_IN_AND_VERIFIED>

                    <MOVIE_DETAILS___PAGE />

            </LOGGED_IN_AND_VERIFIED>

        )
    },



    {
        path: "/bookmarked-movies",
        element: (
            <LOGGED_IN_AND_VERIFIED>

                    <BOOKMARKED_MOVIES___PAGE />

            </LOGGED_IN_AND_VERIFIED>

        )
    },











])



export default allRoutes