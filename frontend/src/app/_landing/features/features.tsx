/* eslint-disable react/no-unescaped-entities */

/*__________________________________________

 ✅ import 
____________________________________________*/

import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import { alpha, useTheme } from "@mui/material/styles"
import SearchIcon from "@mui/icons-material/Search"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import StarRateIcon from "@mui/icons-material/StarRate"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import { colors } from "@mui/material"

/*__________________________________________

 ✅ data 
____________________________________________*/
const data = [
  {
    color: colors.blue[500],
    title: "Search Functionality",
    subtitle: "Find any movie or series instantly with our powerful search.",
    icon: <SearchIcon />,
  },
  {
    color: colors.green[500],
    title: "Trending Now",
    subtitle: "Discover what's popular and trending in the world of cinema.",
    icon: <TrendingUpIcon />,
  },
  {
    color: colors.amber[500],
    title: "Top Picks",
    subtitle: "Browse our curated lists of top-rated movies and series.",
    icon: <StarRateIcon />,
  },
  {
    color: colors.deepOrange[500],
    title: "Bookmark Organization",
    subtitle:
      "Categorize your bookmarks with ease into favorites, watchlist, and watched, for streamlined navigation and organization.",
    icon: <BookmarkBorderIcon />,
  },
]

/*__________________________________________

 ✅ Functional Component 
____________________________________________*/
export default function FEATURES___COMPONENT() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        padding: { xs: "1rem", lg: "2rem" },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid container spacing={4}>
        {data.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              display={"block"}
              width={1}
              height={1}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                sx={{ border: `1px solid ${theme.palette.divider}` }}
                padding={4}
                width={1}
                height={1}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Box
                    component={Avatar}
                    width={45}
                    height={45}
                    marginBottom={2}
                    bgcolor={alpha(item.color, 0.1)}
                    color={item.color}
                    variant={"rounded"}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={"body2"}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
