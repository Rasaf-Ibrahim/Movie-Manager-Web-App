import ALL_PAGE_WRAPPER___COMPONENT from "./all-page-wrapper"


// metadata
export const metadata = {
    title: 'Movie Manager',
    description: 'Movie Manager: Search, explore trending and top-rated selections, and organize your bookmarks into categories.',
}


export default function ROOT_LAYOUT___COMPONENT({ children }) {

  return (

    <html lang="en">

        <body>

            <ALL_PAGE_WRAPPER___COMPONENT>
    
                {children}
                        
            </ALL_PAGE_WRAPPER___COMPONENT>

        </body>

    </html>
  )

}
