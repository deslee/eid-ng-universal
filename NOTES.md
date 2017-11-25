readme functions don't work in aot


    ModuleMapLoaderModule needed in main module to do lazy loading in routes


TODO: investigate page "flickering" on server generated responses
    e.g., profiler shows that page flickers between initial HTML rendering and script processing

fixed with initialnavigation: enabled
may still have issues for styles

used a hack to scroll back up to the top after navigation

added a html sanitization pipe to allow for embed of iframes

added css classes to allow for fluid width videos

next steps: data modeling
https://github.com/jdorn/json-editor

weird issues with netlify cms
fixed the way rxjs is imported