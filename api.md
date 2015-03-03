#Index

**Namespaces**

* [crux](#crux)
  * [crux.Build](#crux.Build)
    * [Build.Angular](#crux.Build.Angular)
      * [Angular.init()](#crux.Build.Angular.init)
      * [Angular.watch()](#crux.Build.Angular.watch)
      * [Angular.run(done)](#crux.Build.Angular.run)
      * [class: Angular.Core](#crux.Build.Angular.Core)
        * [new Angular.Core(config)](#new_crux.Build.Angular.Core)
        * [Core.cache(path, content)](#crux.Build.Angular.Core.cache)
        * [Core.minify(content)](#crux.Build.Angular.Core.minify)
        * [Core.compile([done])](#crux.Build.Angular.Core.compile)
        * [Core.watch(done)](#crux.Build.Angular.Core.watch)
        * [Core.run(done)](#crux.Build.Angular.Core.run)
      * [class: Angular.Index](#crux.Build.Angular.Index)
        * [new Angular.Index(config)](#new_crux.Build.Angular.Index)
        * [Index.watch(done)](#crux.Build.Angular.Index.watch)
        * [Index.run(done)](#crux.Build.Angular.Index.run)
        * [Index.copy([done])](#crux.Build.Angular.Index.copy)
      * [class: Angular.Templates](#crux.Build.Angular.Templates)
        * [new Angular.Templates(config)](#new_crux.Build.Angular.Templates)
        * [Templates.watch(done)](#crux.Build.Angular.Templates.watch)
        * [Templates.run(done)](#crux.Build.Angular.Templates.run)
        * [Templates.cache(path, content)](#crux.Build.Angular.Templates.cache)
        * [Templates.compile(done)](#crux.Build.Angular.Templates.compile)
    * [class: Build.Build](#crux.Build.Build)
      * [new Build.Build(config)](#new_crux.Build.Build)
      * [build.process(name, config)](#crux.Build.Build#process)
      * [build.custom(name, processDefinition, [config])](#crux.Build.Build#custom)
      * [build.init()](#crux.Build.Build#init)
      * [build.set(name, value)](#crux.Build.Build#set)
      * [build.run(done)](#crux.Build.Build#run)
    * [class: Build.Interface](#crux.Build.Interface)
      * [new Build.Interface()](#new_crux.Build.Interface)
    * [class: Build.Commonjs](#crux.Build.Commonjs)
      * [new Build.Commonjs(config)](#new_crux.Build.Commonjs)
      * [Commonjs.save(content, done)](#crux.Build.Commonjs.save)
      * [Commonjs.build()](#crux.Build.Commonjs.build)
      * [Commonjs.run(done)](#crux.Build.Commonjs.run)
    * [class: Build.Less](#crux.Build.Less)
      * [new Build.Less(config)](#new_crux.Build.Less)
      * [Less.init()](#crux.Build.Less.init)
      * [Less.run(done)](#crux.Build.Less.run)
      * [Less.__getConfig()](#crux.Build.Less.__getConfig)
      * [Less.buildFiles(done)](#crux.Build.Less.buildFiles)
      * [Less.buildEntry(done)](#crux.Build.Less.buildEntry)
      * [Less.build(fileName)](#crux.Build.Less.build)
    * [class: Build.Sass](#crux.Build.Sass)
      * [new Build.Sass(config)](#new_crux.Build.Sass)
      * [Sass.init()](#crux.Build.Sass.init)
      * [Sass.run(done)](#crux.Build.Sass.run)
      * [Sass.build()](#crux.Build.Sass.build)
    * [class: Build.Templates](#crux.Build.Templates)
      * [new Build.Templates(config)](#new_crux.Build.Templates)
      * [Templates.wrap(content)](#crux.Build.Templates.wrap)
      * [Templates.build(filePath, content)](#crux.Build.Templates.build)
      * [Templates.save(cb)](#crux.Build.Templates.save)
      * [Templates.cache(path, content)](#crux.Build.Templates.cache)
      * [Templates.run(done)](#crux.Build.Templates.run)
  * [crux.util](#crux.util)
    * [util.capitalize(str, [replaceUnderline])](#crux.util.capitalize)
    * [util.sha1()](#crux.util.sha1)
    * [util.sha2()](#crux.util.sha2)
    * [util.minify()](#crux.util.minify)
    * [util.extend([deepMerge], targetObject, sourceObject)](#crux.util.extend)
    * [util.readDirectory(path, [extension], [str], [isSingleLevel])](#crux.util.readDirectory)
    * [util.readDirectoryRelative(path, [extension], [str], [isSingleLevel])](#crux.util.readDirectoryRelative)
    * [util.uniqueId(len, [onlyNumbers], [onlyChars], [specialChars])](#crux.util.uniqueId)
    * [util.getFileName(path, true)](#crux.util.getFileName)
    * [util.inspect(obj)](#crux.util.inspect)
    * [util.utcTime([d])](#crux.util.utcTime)
    * [class: util.Parser](#crux.util.Parser)
      * [new util.Parser()](#new_crux.util.Parser)
      * [Parser.parser#read([fn])](#crux.util.Parser.parser#read)
      * [Parser.parser#yml(content)](#crux.util.Parser.parser#yml)
      * [Parser.parser#json(content)](#crux.util.Parser.parser#json)
      * [Parser.parser#js(content)](#crux.util.Parser.parser#js)
    * [class: util.install](#crux.util.install)
      * [new util.install()](#new_crux.util.install)
      * [install.npm(name, fn, isRootPath)](#crux.util.install.npm)
  * [class: crux.Service](#crux.Service)
    * [new crux.Service()](#new_crux.Service)
    * [service.init(config)](#crux.Service#init)
    * [service.run(done)](#crux.Service#run)
  * [class: crux.Application](#crux.Application)
    * [new crux.Application()](#new_crux.Application)
    * [Application.config](#crux.Application.config)
    * [Application.app#path(path)](#crux.Application.app#path)
    * [Application.app#environment([value])](#crux.Application.app#environment)
    * [Application.app#init()](#crux.Application.app#init)
    * [Application.app#component(name)](#crux.Application.app#component)
    * [Application.app#addComponent(component, [config])](#crux.Application.app#addComponent)
    * [Application.app#configureComponent(name, config)](#crux.Application.app#configureComponent)
    * [Application.app#run(callback)](#crux.Application.app#run)
  * [class: crux.Component](#crux.Component)
    * [new crux.Component()](#new_crux.Component)
    * [Component.__configuration](#crux.Component.__configuration)
    * [Component.component#extendConfig(options)](#crux.Component.component#extendConfig)
    * [Component.component#run(callback)](#crux.Component.component#run)
    * [Component.component#init()](#crux.Component.component#init)
    * [Component.component#stop()](#crux.Component.component#stop)
    * [Component.component#get()](#crux.Component.component#get)
    * [Component.component#requirements()](#crux.Component.component#requirements)
    * [Component.component#packages()](#crux.Component.component#packages)
    * [Component.component#attach(methodName, methodFn)](#crux.Component.component#attach)
  * [class: crux.Registry](#crux.Registry)
    * [new crux.Registry()](#new_crux.Registry)
    * [Registry.registry#register(component)](#crux.Registry.registry#register)
    * [Registry.registry#has(name)](#crux.Registry.registry#has)
    * [Registry.registry#get(name)](#crux.Registry.registry#get)
    * [Registry.registry#attachTo(component, functionName, callback)](#crux.Registry.registry#attachTo)
    * [Registry.registry#run(name, callback)](#crux.Registry.registry#run)
    * [Registry.registry#checkDependency(component, callback)](#crux.Registry.registry#checkDependency)
    * [Registry.registry#initialize(callback)](#crux.Registry.registry#initialize)

**Members**

* [__rootdir](#__rootdir)
* [_](#_)
* [log](#log)

**Typedefs**

* [type: RedisTransaction](#RedisTransaction)
 
<a name="crux"></a>
#crux
**Members**

* [crux](#crux)
  * [crux.Build](#crux.Build)
    * [Build.Angular](#crux.Build.Angular)
      * [Angular.init()](#crux.Build.Angular.init)
      * [Angular.watch()](#crux.Build.Angular.watch)
      * [Angular.run(done)](#crux.Build.Angular.run)
      * [class: Angular.Core](#crux.Build.Angular.Core)
        * [new Angular.Core(config)](#new_crux.Build.Angular.Core)
        * [Core.cache(path, content)](#crux.Build.Angular.Core.cache)
        * [Core.minify(content)](#crux.Build.Angular.Core.minify)
        * [Core.compile([done])](#crux.Build.Angular.Core.compile)
        * [Core.watch(done)](#crux.Build.Angular.Core.watch)
        * [Core.run(done)](#crux.Build.Angular.Core.run)
      * [class: Angular.Index](#crux.Build.Angular.Index)
        * [new Angular.Index(config)](#new_crux.Build.Angular.Index)
        * [Index.watch(done)](#crux.Build.Angular.Index.watch)
        * [Index.run(done)](#crux.Build.Angular.Index.run)
        * [Index.copy([done])](#crux.Build.Angular.Index.copy)
      * [class: Angular.Templates](#crux.Build.Angular.Templates)
        * [new Angular.Templates(config)](#new_crux.Build.Angular.Templates)
        * [Templates.watch(done)](#crux.Build.Angular.Templates.watch)
        * [Templates.run(done)](#crux.Build.Angular.Templates.run)
        * [Templates.cache(path, content)](#crux.Build.Angular.Templates.cache)
        * [Templates.compile(done)](#crux.Build.Angular.Templates.compile)
    * [class: Build.Build](#crux.Build.Build)
      * [new Build.Build(config)](#new_crux.Build.Build)
      * [build.process(name, config)](#crux.Build.Build#process)
      * [build.custom(name, processDefinition, [config])](#crux.Build.Build#custom)
      * [build.init()](#crux.Build.Build#init)
      * [build.set(name, value)](#crux.Build.Build#set)
      * [build.run(done)](#crux.Build.Build#run)
    * [class: Build.Interface](#crux.Build.Interface)
      * [new Build.Interface()](#new_crux.Build.Interface)
    * [class: Build.Commonjs](#crux.Build.Commonjs)
      * [new Build.Commonjs(config)](#new_crux.Build.Commonjs)
      * [Commonjs.save(content, done)](#crux.Build.Commonjs.save)
      * [Commonjs.build()](#crux.Build.Commonjs.build)
      * [Commonjs.run(done)](#crux.Build.Commonjs.run)
    * [class: Build.Less](#crux.Build.Less)
      * [new Build.Less(config)](#new_crux.Build.Less)
      * [Less.init()](#crux.Build.Less.init)
      * [Less.run(done)](#crux.Build.Less.run)
      * [Less.__getConfig()](#crux.Build.Less.__getConfig)
      * [Less.buildFiles(done)](#crux.Build.Less.buildFiles)
      * [Less.buildEntry(done)](#crux.Build.Less.buildEntry)
      * [Less.build(fileName)](#crux.Build.Less.build)
    * [class: Build.Sass](#crux.Build.Sass)
      * [new Build.Sass(config)](#new_crux.Build.Sass)
      * [Sass.init()](#crux.Build.Sass.init)
      * [Sass.run(done)](#crux.Build.Sass.run)
      * [Sass.build()](#crux.Build.Sass.build)
    * [class: Build.Templates](#crux.Build.Templates)
      * [new Build.Templates(config)](#new_crux.Build.Templates)
      * [Templates.wrap(content)](#crux.Build.Templates.wrap)
      * [Templates.build(filePath, content)](#crux.Build.Templates.build)
      * [Templates.save(cb)](#crux.Build.Templates.save)
      * [Templates.cache(path, content)](#crux.Build.Templates.cache)
      * [Templates.run(done)](#crux.Build.Templates.run)
  * [crux.util](#crux.util)
    * [util.capitalize(str, [replaceUnderline])](#crux.util.capitalize)
    * [util.sha1()](#crux.util.sha1)
    * [util.sha2()](#crux.util.sha2)
    * [util.minify()](#crux.util.minify)
    * [util.extend([deepMerge], targetObject, sourceObject)](#crux.util.extend)
    * [util.readDirectory(path, [extension], [str], [isSingleLevel])](#crux.util.readDirectory)
    * [util.readDirectoryRelative(path, [extension], [str], [isSingleLevel])](#crux.util.readDirectoryRelative)
    * [util.uniqueId(len, [onlyNumbers], [onlyChars], [specialChars])](#crux.util.uniqueId)
    * [util.getFileName(path, true)](#crux.util.getFileName)
    * [util.inspect(obj)](#crux.util.inspect)
    * [util.utcTime([d])](#crux.util.utcTime)
    * [class: util.Parser](#crux.util.Parser)
      * [new util.Parser()](#new_crux.util.Parser)
      * [Parser.parser#read([fn])](#crux.util.Parser.parser#read)
      * [Parser.parser#yml(content)](#crux.util.Parser.parser#yml)
      * [Parser.parser#json(content)](#crux.util.Parser.parser#json)
      * [Parser.parser#js(content)](#crux.util.Parser.parser#js)
    * [class: util.install](#crux.util.install)
      * [new util.install()](#new_crux.util.install)
      * [install.npm(name, fn, isRootPath)](#crux.util.install.npm)
  * [class: crux.Service](#crux.Service)
    * [new crux.Service()](#new_crux.Service)
    * [service.init(config)](#crux.Service#init)
    * [service.run(done)](#crux.Service#run)
  * [class: crux.Application](#crux.Application)
    * [new crux.Application()](#new_crux.Application)
    * [Application.config](#crux.Application.config)
    * [Application.app#path(path)](#crux.Application.app#path)
    * [Application.app#environment([value])](#crux.Application.app#environment)
    * [Application.app#init()](#crux.Application.app#init)
    * [Application.app#component(name)](#crux.Application.app#component)
    * [Application.app#addComponent(component, [config])](#crux.Application.app#addComponent)
    * [Application.app#configureComponent(name, config)](#crux.Application.app#configureComponent)
    * [Application.app#run(callback)](#crux.Application.app#run)
  * [class: crux.Component](#crux.Component)
    * [new crux.Component()](#new_crux.Component)
    * [Component.__configuration](#crux.Component.__configuration)
    * [Component.component#extendConfig(options)](#crux.Component.component#extendConfig)
    * [Component.component#run(callback)](#crux.Component.component#run)
    * [Component.component#init()](#crux.Component.component#init)
    * [Component.component#stop()](#crux.Component.component#stop)
    * [Component.component#get()](#crux.Component.component#get)
    * [Component.component#requirements()](#crux.Component.component#requirements)
    * [Component.component#packages()](#crux.Component.component#packages)
    * [Component.component#attach(methodName, methodFn)](#crux.Component.component#attach)
  * [class: crux.Registry](#crux.Registry)
    * [new crux.Registry()](#new_crux.Registry)
    * [Registry.registry#register(component)](#crux.Registry.registry#register)
    * [Registry.registry#has(name)](#crux.Registry.registry#has)
    * [Registry.registry#get(name)](#crux.Registry.registry#get)
    * [Registry.registry#attachTo(component, functionName, callback)](#crux.Registry.registry#attachTo)
    * [Registry.registry#run(name, callback)](#crux.Registry.registry#run)
    * [Registry.registry#checkDependency(component, callback)](#crux.Registry.registry#checkDependency)
    * [Registry.registry#initialize(callback)](#crux.Registry.registry#initialize)

<a name="crux.Build"></a>
##crux.Build
The Crux build system is a core component designed to perform automatic building of code, thus enabling the developer to

**Members**

* [crux.Build](#crux.Build)
  * [Build.Angular](#crux.Build.Angular)
    * [Angular.init()](#crux.Build.Angular.init)
    * [Angular.watch()](#crux.Build.Angular.watch)
    * [Angular.run(done)](#crux.Build.Angular.run)
    * [class: Angular.Core](#crux.Build.Angular.Core)
      * [new Angular.Core(config)](#new_crux.Build.Angular.Core)
      * [Core.cache(path, content)](#crux.Build.Angular.Core.cache)
      * [Core.minify(content)](#crux.Build.Angular.Core.minify)
      * [Core.compile([done])](#crux.Build.Angular.Core.compile)
      * [Core.watch(done)](#crux.Build.Angular.Core.watch)
      * [Core.run(done)](#crux.Build.Angular.Core.run)
    * [class: Angular.Index](#crux.Build.Angular.Index)
      * [new Angular.Index(config)](#new_crux.Build.Angular.Index)
      * [Index.watch(done)](#crux.Build.Angular.Index.watch)
      * [Index.run(done)](#crux.Build.Angular.Index.run)
      * [Index.copy([done])](#crux.Build.Angular.Index.copy)
    * [class: Angular.Templates](#crux.Build.Angular.Templates)
      * [new Angular.Templates(config)](#new_crux.Build.Angular.Templates)
      * [Templates.watch(done)](#crux.Build.Angular.Templates.watch)
      * [Templates.run(done)](#crux.Build.Angular.Templates.run)
      * [Templates.cache(path, content)](#crux.Build.Angular.Templates.cache)
      * [Templates.compile(done)](#crux.Build.Angular.Templates.compile)
  * [class: Build.Build](#crux.Build.Build)
    * [new Build.Build(config)](#new_crux.Build.Build)
    * [build.process(name, config)](#crux.Build.Build#process)
    * [build.custom(name, processDefinition, [config])](#crux.Build.Build#custom)
    * [build.init()](#crux.Build.Build#init)
    * [build.set(name, value)](#crux.Build.Build#set)
    * [build.run(done)](#crux.Build.Build#run)
  * [class: Build.Interface](#crux.Build.Interface)
    * [new Build.Interface()](#new_crux.Build.Interface)
  * [class: Build.Commonjs](#crux.Build.Commonjs)
    * [new Build.Commonjs(config)](#new_crux.Build.Commonjs)
    * [Commonjs.save(content, done)](#crux.Build.Commonjs.save)
    * [Commonjs.build()](#crux.Build.Commonjs.build)
    * [Commonjs.run(done)](#crux.Build.Commonjs.run)
  * [class: Build.Less](#crux.Build.Less)
    * [new Build.Less(config)](#new_crux.Build.Less)
    * [Less.init()](#crux.Build.Less.init)
    * [Less.run(done)](#crux.Build.Less.run)
    * [Less.__getConfig()](#crux.Build.Less.__getConfig)
    * [Less.buildFiles(done)](#crux.Build.Less.buildFiles)
    * [Less.buildEntry(done)](#crux.Build.Less.buildEntry)
    * [Less.build(fileName)](#crux.Build.Less.build)
  * [class: Build.Sass](#crux.Build.Sass)
    * [new Build.Sass(config)](#new_crux.Build.Sass)
    * [Sass.init()](#crux.Build.Sass.init)
    * [Sass.run(done)](#crux.Build.Sass.run)
    * [Sass.build()](#crux.Build.Sass.build)
  * [class: Build.Templates](#crux.Build.Templates)
    * [new Build.Templates(config)](#new_crux.Build.Templates)
    * [Templates.wrap(content)](#crux.Build.Templates.wrap)
    * [Templates.build(filePath, content)](#crux.Build.Templates.build)
    * [Templates.save(cb)](#crux.Build.Templates.save)
    * [Templates.cache(path, content)](#crux.Build.Templates.cache)
    * [Templates.run(done)](#crux.Build.Templates.run)

<a name="crux.Build.Angular"></a>
###Build.Angular
The crux angular build process provides angular-related building process. As most angular applications tend to be stored
   <b>Note 2</b>: This class should not be overridden or modified in any way, as it may cause unstability.<br/>

**Members**

* [Build.Angular](#crux.Build.Angular)
  * [Angular.init()](#crux.Build.Angular.init)
  * [Angular.watch()](#crux.Build.Angular.watch)
  * [Angular.run(done)](#crux.Build.Angular.run)
  * [class: Angular.Core](#crux.Build.Angular.Core)
    * [new Angular.Core(config)](#new_crux.Build.Angular.Core)
    * [Core.cache(path, content)](#crux.Build.Angular.Core.cache)
    * [Core.minify(content)](#crux.Build.Angular.Core.minify)
    * [Core.compile([done])](#crux.Build.Angular.Core.compile)
    * [Core.watch(done)](#crux.Build.Angular.Core.watch)
    * [Core.run(done)](#crux.Build.Angular.Core.run)
  * [class: Angular.Index](#crux.Build.Angular.Index)
    * [new Angular.Index(config)](#new_crux.Build.Angular.Index)
    * [Index.watch(done)](#crux.Build.Angular.Index.watch)
    * [Index.run(done)](#crux.Build.Angular.Index.run)
    * [Index.copy([done])](#crux.Build.Angular.Index.copy)
  * [class: Angular.Templates](#crux.Build.Angular.Templates)
    * [new Angular.Templates(config)](#new_crux.Build.Angular.Templates)
    * [Templates.watch(done)](#crux.Build.Angular.Templates.watch)
    * [Templates.run(done)](#crux.Build.Angular.Templates.run)
    * [Templates.cache(path, content)](#crux.Build.Angular.Templates.cache)
    * [Templates.compile(done)](#crux.Build.Angular.Templates.compile)

<a name="crux.Build.Angular.init"></a>
####Angular.init()
Initializes the angular build process, loading any angular sub-processes<br/>

<a name="crux.Build.Angular.watch"></a>
####Angular.watch()
Overrides the interface's watch() function, by calling all of its sub-processes's watch() function

<a name="crux.Build.Angular.run"></a>
####Angular.run(done)
Runs all configured angular sub-processes

**Params**

- done `function` - the on complete callback.  

<a name="crux.Build.Angular.Core"></a>
####class: Angular.Core
**Members**

* [class: Angular.Core](#crux.Build.Angular.Core)
  * [new Angular.Core(config)](#new_crux.Build.Angular.Core)
  * [Core.cache(path, content)](#crux.Build.Angular.Core.cache)
  * [Core.minify(content)](#crux.Build.Angular.Core.minify)
  * [Core.compile([done])](#crux.Build.Angular.Core.compile)
  * [Core.watch(done)](#crux.Build.Angular.Core.watch)
  * [Core.run(done)](#crux.Build.Angular.Core.run)

<a name="new_crux.Build.Angular.Core"></a>
#####new Angular.Core(config)
The angular's core process performs javaScript building by concatenating all source files into a single javaScript build file<br/>

**Params**

- config `Object` - the default configuration of the process  
  - \[extension=.js\] `String` - default javaScript file extension  
  - \[path=front/app\] `String` - angular root folder path  
  - \[entry=app.js\] `String` - main angular application file  
  - \[output=public/js/build/$module.angular.js\] `String` - output path for the built javaScript file. Note that <b>$module</b> may be used in the path, and is angular's module name of the process  
  - \[module=app\] `String` - angular module name.  
  - \[config=config/$environment.js\] `String` - configuration files to be loaded while building. Note that the <b>$environment<b/> is available in this path, representing crux's environment name  
  - \[priority\] `Array.<String>` - array of javaScript files that we will be used to prioritize file loading when building starts. Note that we will match each path with the files path (see example) when creating the priority list  
  - \[minify=false\] `Boolean` - minify the javaScript output. By default, we will only replace excessive whitespaces and comments, and not full js minification (yet)  
  - \[compile\] `function` - callback function to be called when reading the content of each js file.  

**Properties**

- CACHE `Object` - cache object containing the cached js file contents  

<a name="crux.Build.Angular.Core.cache"></a>
#####Core.cache(path, content)
Caches the javascript file to the memory, before compiling. This is called when initialli running the process and when a file changes, to speed-up the compilation process

**Params**

- path `String` - file path that we want to cache  
- content `String` - js content of the path  

<a name="crux.Build.Angular.Core.minify"></a>
#####Core.minify(content)
Performs minification on the given js content. Note that minification implies only removing multiple whitespaces and comments.

**Params**

- content `String` - js content to minify  

<a name="crux.Build.Angular.Core.compile"></a>
#####Core.compile([done])
Compiles the javascript cache/output and saves it to the build file.<br/>

**Params**

- \[done\] `function` - callback function to be called once compiled  

<a name="crux.Build.Angular.Core.watch"></a>
#####Core.watch(done)
Starts watching for changes in the js files of the angular directory

**Params**

- done `function` - callback function to be called on file change.  

<a name="crux.Build.Angular.Core.run"></a>
#####Core.run(done)
Builds up the file cache and runs the angular core concatenation and compilation process

**Params**

- done `function` - on complete callback.  

<a name="crux.Build.Angular.Index"></a>
####class: Angular.Index
**Members**

* [class: Angular.Index](#crux.Build.Angular.Index)
  * [new Angular.Index(config)](#new_crux.Build.Angular.Index)
  * [Index.watch(done)](#crux.Build.Angular.Index.watch)
  * [Index.run(done)](#crux.Build.Angular.Index.run)
  * [Index.copy([done])](#crux.Build.Angular.Index.copy)

<a name="new_crux.Build.Angular.Index"></a>
#####new Angular.Index(config)
This is the angular sub-process task called Angular.index. Its only purpose

**Params**

- config `Object` - default process configuration  
  - \[path=front/app/index.html\] `String` - source path to the main html file  
  - \[output=public/index.html\] `String` - destination path for the main html file to be copied  

<a name="crux.Build.Angular.Index.watch"></a>
#####Index.watch(done)
Watches for changes for the index.html file Once it changes, it will simply copy its content

**Params**

- done `function` - on change callback  

<a name="crux.Build.Angular.Index.run"></a>
#####Index.run(done)
Runs the process, copying the index.html to the public folder.

**Params**

- done `function` - on complete callback  

<a name="crux.Build.Angular.Index.copy"></a>
#####Index.copy([done])
Copies the source html file contents to the target file.

**Params**

- \[done\] `function` - on complete callback  

<a name="crux.Build.Angular.Templates"></a>
####class: Angular.Templates
**Members**

* [class: Angular.Templates](#crux.Build.Angular.Templates)
  * [new Angular.Templates(config)](#new_crux.Build.Angular.Templates)
  * [Templates.watch(done)](#crux.Build.Angular.Templates.watch)
  * [Templates.run(done)](#crux.Build.Angular.Templates.run)
  * [Templates.cache(path, content)](#crux.Build.Angular.Templates.cache)
  * [Templates.compile(done)](#crux.Build.Angular.Templates.compile)

<a name="new_crux.Build.Angular.Templates"></a>
#####new Angular.Templates(config)
This is an utility process that watches for changes in angular's view directory and performs caching on them.<br/>

**Params**

- config `Object` - angular template configuration  
  - \[extension=html\] `String` - view extensions to use  
  - \[module=app\] `String` - the view module's name.  
  - \[path=front/app/views\] `String` - view directory path  
  - \[viewPath=/\] `String` - base path tho be prepended for each view file.  
  - \[viewExtension=false\] `Boolean` - should we remove the extension of each view, when creating the build file.  
  - \[compile\] `function` - callback function to be called when reading the content of each view file.  

**Example**  
// Using the default configuration, we may have the following view structure:

<a name="crux.Build.Angular.Templates.watch"></a>
#####Templates.watch(done)
Watches for any changes in the angular view directory

**Params**

- done `function` - on change callback  

<a name="crux.Build.Angular.Templates.run"></a>
#####Templates.run(done)
Runs the templates process, reading the view directory structure and caching it, after which it will compile the output js template file

**Params**

- done `function` - on complete callback  

<a name="crux.Build.Angular.Templates.cache"></a>
#####Templates.cache(path, content)
Caches the given path/content and places it under the CACHE property.

**Params**

- path `String` - view path file  
- content `String` - view html content  

<a name="crux.Build.Angular.Templates.compile"></a>
#####Templates.compile(done)
Ths will retrieve everything that we have in cache and compile it, generating the javascript

**Params**

- done `function` - on compile callback.  

<a name="crux.Build.Build"></a>
###class: Build.Build
**Extends**: `crux.Component`  
**Members**

* [class: Build.Build](#crux.Build.Build)
  * [new Build.Build(config)](#new_crux.Build.Build)
  * [build.process(name, config)](#crux.Build.Build#process)
  * [build.custom(name, processDefinition, [config])](#crux.Build.Build#custom)
  * [build.init()](#crux.Build.Build#init)
  * [build.set(name, value)](#crux.Build.Build#set)
  * [build.run(done)](#crux.Build.Build#run)

<a name="new_crux.Build.Build"></a>
####new Build.Build(config)
The crux build core-component manages all registered build processes. It stands as an intermediator between the crux app

**Params**

- config `Object` - Default configurations for the build component  
  - debug `Boolean` - Enables or disables debug logging to the console  
  - autoRun `Boolean` - Runs each build process on application run, thus re-compiling the specified sources. This overrides the autoRun property of each process  
  - autoWatch `Boolean` - Automatically calls the watch function of each registered process. This should be used in development and overrides the autoWatch property of each process  
  - process `Object` - A key-value object that holds the configuration for each individual process. This configuration is passed to the build process, for more information visit the processes documentation  

**Properties**

- loaded `Array` - an array of loaded processes  
- config `Object` - the build component configuration object  

**Extends**: `crux.Component`  
<a name="crux.Build.Build#process"></a>
####build.process(name, config)
The function will manually enable a build component by setting the given configuration file

**Params**

- name `String` - The crux core process name  
- config `Object` - The configuration object assigned to the process.  

<a name="crux.Build.Build#custom"></a>
####build.custom(name, processDefinition, [config])
The function will allow developers to register a custom build process (implementing the process interface)

**Params**

- name `String` - the name of the custom process to be attached  
- processDefinition `function` - the function prototype of the build component (extending crux.Build.Interface)  
- \[config\] `Object` - additional configuration object to be passed to the process  

<a name="crux.Build.Build#init"></a>
####build.init()
Initializes the build component. The function will loop over all the registered build processes and check their crux

<a name="crux.Build.Build#set"></a>
####build.set(name, value)
Manually set the given configuration object to the build component's internal configuration

**Params**

- name `String` - the property in the config object to set  
- value `Any` - the value to set.  

<a name="crux.Build.Build#run"></a>
####build.run(done)
This will run the build component. In terms, it will loop over all registered build processes and install their external package requirements.<br/>

**Params**

- done `function` - the on complete callback to be called after each process has started.  

<a name="crux.Build.Interface"></a>
###class: Build.Interface
**Members**

* [class: Build.Interface](#crux.Build.Interface)
  * [new Build.Interface()](#new_crux.Build.Interface)

<a name="new_crux.Build.Interface"></a>
####new Build.Interface()
This is the interface every build process must extend. The crux build component will not run with processes that do not extend this.<br/>

<a name="crux.Build.Commonjs"></a>
###class: Build.Commonjs
**Members**

* [class: Build.Commonjs](#crux.Build.Commonjs)
  * [new Build.Commonjs(config)](#new_crux.Build.Commonjs)
  * [Commonjs.save(content, done)](#crux.Build.Commonjs.save)
  * [Commonjs.build()](#crux.Build.Commonjs.build)
  * [Commonjs.run(done)](#crux.Build.Commonjs.run)

<a name="new_crux.Build.Commonjs"></a>
####new Build.Commonjs(config)
The Crux CommonJS build process seamlessly integrates browserify and aliasify into the frontend javascript code,

**Params**

- config `Object` - the default configuration object  
  - \[path=front/commonjs\] `String` - the root front-end application folder.  
  - \[entry=app.js\] `String` - the single entry file to use when building the front-end application  
  - \[extension=.js\] `String` - default extension of our javascrpt files  
  - \[output=public/js/build/app.build.js\] `String` - the default output file that will contain the fully generated frontend app  
  - \[aliasify=true\] `Boolean` - by default, aliasify is enabled when building, automatically creating the mapping of each js file in the folder.  
  - \[uglify=false\] `Boolean` - should this process create minified content using the uglify-js npm module  
  - \[transform\] `Array` - additional transformations to be directly passed to browserify's transform() method.  

**Example**  
// The configuration we will use for this example.

<a name="crux.Build.Commonjs.save"></a>
####Commonjs.save(content, done)
Saves the generated build file to the configured path, minifying it (with sourcemaps) if configured.

**Params**

- content `String` - generated js content  
- done `function` - on save callback  

<a name="crux.Build.Commonjs.build"></a>
####Commonjs.build()
In our case, build() is the same with run, because we have to re-compile everything.

<a name="crux.Build.Commonjs.run"></a>
####Commonjs.run(done)
Starts the build process. It is composed of the following steps<br/>

**Params**

- done `function` - the on compete function.  

<a name="crux.Build.Less"></a>
###class: Build.Less
**Extends**: `crux.Build.Interface`  
**Members**

* [class: Build.Less](#crux.Build.Less)
  * [new Build.Less(config)](#new_crux.Build.Less)
  * [Less.init()](#crux.Build.Less.init)
  * [Less.run(done)](#crux.Build.Less.run)
  * [Less.__getConfig()](#crux.Build.Less.__getConfig)
  * [Less.buildFiles(done)](#crux.Build.Less.buildFiles)
  * [Less.buildEntry(done)](#crux.Build.Less.buildEntry)
  * [Less.build(fileName)](#crux.Build.Less.build)

<a name="new_crux.Build.Less"></a>
####new Build.Less(config)
This is the LESS build compiler. It will compile any .less files configured. It uses <b>less@2.2</b> npm package  to do so.

**Params**

- config `Object` - the default process configuration object  
  - \[extension=.less\] `String` - file extension of our less files.  
  - \[path=front/less\] `String` - file path used for less sources, relative to the project's root folder  
  - \[entry=style.less\] `String` - the main less file to be compiled  
  - \[output=public/css/style.css\] `String` - the output file used to compile the less entry file  
  - \[compressed=false\] `Boolean` - should the generated CSS be compressed  
  - \[files=[]\] `Array` - allows the compilation of additional .less files. These are in format of { "fileName" : "outputFile"}. Note: fileName is relative to the [path] config and outputFile is relative to the [output] config,  
  - \[includes\] `Array` - additional file paths to be included while compiling the less sources  
  - \[options\] `Object` - additional less options to be passed on compile time  

**Properties**

- config `Object` - the configuration object attached to this process  

**Extends**: `crux.Build.Interface`  
<a name="crux.Build.Less.init"></a>
####Less.init()
Initializes the less process, requiring the less npm module

<a name="crux.Build.Less.run"></a>
####Less.run(done)
Runs the less process, building the files.

**Params**

- done `function` - the oncomplete callback  

<a name="crux.Build.Less.__getConfig"></a>
####Less.__getConfig()
Returns the less process configuration object.<br/>

**Returns**: `Object`  
<a name="crux.Build.Less.buildFiles"></a>
####Less.buildFiles(done)
Performs the less build process over all the configured additional files.<br/>

**Params**

- done `function` - the on complete function to be called.  

**Example**  
// example configuration

<a name="crux.Build.Less.buildEntry"></a>
####Less.buildEntry(done)
Performs main entry-file compilation. This is used when we have no additional files under the configuration.

**Params**

- done `function` - the on complete function to be called  

<a name="crux.Build.Less.build"></a>
####Less.build(fileName)
Starts the less building process on both the entry file and additional files (if configured)

**Params**

- fileName `String` - the file name that has just changed.  

<a name="crux.Build.Sass"></a>
###class: Build.Sass
**Extends**: `crux.Build.Interface`  
**Members**

* [class: Build.Sass](#crux.Build.Sass)
  * [new Build.Sass(config)](#new_crux.Build.Sass)
  * [Sass.init()](#crux.Build.Sass.init)
  * [Sass.run(done)](#crux.Build.Sass.run)
  * [Sass.build()](#crux.Build.Sass.build)

<a name="new_crux.Build.Sass"></a>
####new Build.Sass(config)
This is the SASS build compiler. It will compile any .scss files configured. It uses <b>node-sass@1.0.3</b> npm package  to do so.

**Params**

- config `Object` - the default process configuration object  
  - \[extension=.scss\] `String` - file extension of our sass files.  
  - \[path=front/sass\] `String` - file path used for sass sources, relative to the project's root folder  
  - \[entry=style.scss\] `String` - the main less file to be compiled  
  - \[output=public/css/style.css\] `String` - the output file used to compile the sass entry file  
  - \[compressed=false\] `Boolean` - should the generated CSS be compressed  
  - \[includes\] `Array` - additional file paths to be included while compiling the less sources  
  - \[options\] `Object` - additional sass options to be passed on compile time  

**Properties**

- config `Object` - the configuration object attached to this process  

**Extends**: `crux.Build.Interface`  
<a name="crux.Build.Sass.init"></a>
####Sass.init()
Initializes the SASS process, requiring the node-sass npm module

<a name="crux.Build.Sass.run"></a>
####Sass.run(done)
Runs the sass process, building the files.

**Params**

- done `function` - the oncomplete callback  

<a name="crux.Build.Sass.build"></a>
####Sass.build()
The build process is the same with run().

<a name="crux.Build.Templates"></a>
###class: Build.Templates
**Extends**: `crux.Build.Interface`  
**Members**

* [class: Build.Templates](#crux.Build.Templates)
  * [new Build.Templates(config)](#new_crux.Build.Templates)
  * [Templates.wrap(content)](#crux.Build.Templates.wrap)
  * [Templates.build(filePath, content)](#crux.Build.Templates.build)
  * [Templates.save(cb)](#crux.Build.Templates.save)
  * [Templates.cache(path, content)](#crux.Build.Templates.cache)
  * [Templates.run(done)](#crux.Build.Templates.run)

<a name="new_crux.Build.Templates"></a>
####new Build.Templates(config)
This build process will watch for changes to html/client-side templates and transform them into JavaScript objects.

**Params**

- config `Object` - the default process configuration object  
  - \[extension=.html\] `String` - default template extension  
  - \[path=front/views\] `String` - default file path to watch for changes, relative to the project's root directory  
  - \[removeExtension=true\] `Boolean` - by default, the file's extension will be removed when creating the template cache object  
  - \[output=public/js/build/templates.js\] `String` - the output javascript file that will contain the cached templates  
  - \[minify=false\] `Boolean` - should the HTML content be minified, removing excessive whitespaces and comments  
  - \[process\] `function` - the callback function that will be called with the content of each template file once it changes. If specified, it must return the modified content (String)  
  - \[wrap=window.VIEWS = $content;\] `String` - the javaScript template to be used when generating the template cache object. Note that $content is the json-ified object of the templates. This should reflect the location into which we place the generated template cache in the js environment of the browser  

**Properties**

- CACHE `Object` - contains the cached view content, as we only re-compile when a template changes and update the cache with its content  

**Extends**: `crux.Build.Interface`  
**Example**  
// example config

<a name="crux.Build.Templates.wrap"></a>
####Templates.wrap(content)
The html build system allows the developer to wrap the generated js object of {fileName:fileContent} to process it.

**Params**

- content `String` - the file content of the changed template.  

<a name="crux.Build.Templates.build"></a>
####Templates.build(filePath, content)
The template build process implies updating the cache with the modified template content and

**Params**

- filePath `String` - the file path that has just changed  
- content `String` - the file content of the template.  

<a name="crux.Build.Templates.save"></a>
####Templates.save(cb)
Saves the html cache output to the file. It basically JSON.stringifies the cache, wraps it the javaScript wrapper

**Params**

- cb `function` - the callback function to be called when the save is complete.  

<a name="crux.Build.Templates.cache"></a>
####Templates.cache(path, content)
This will handle a single view file by adding it to the cache. If configured, it will also process the file content

**Params**

- path `String` - the template path  
- content `String` - the template content  

<a name="crux.Build.Templates.run"></a>
####Templates.run(done)
Runs the template building process, building the output file.

**Params**

- done `function` - the on complete function to be called  

<a name="crux.util"></a>
##crux.util
Contains utility functionality that can be accessed anywhere via crux.util

**Members**

* [crux.util](#crux.util)
  * [util.capitalize(str, [replaceUnderline])](#crux.util.capitalize)
  * [util.sha1()](#crux.util.sha1)
  * [util.sha2()](#crux.util.sha2)
  * [util.minify()](#crux.util.minify)
  * [util.extend([deepMerge], targetObject, sourceObject)](#crux.util.extend)
  * [util.readDirectory(path, [extension], [str], [isSingleLevel])](#crux.util.readDirectory)
  * [util.readDirectoryRelative(path, [extension], [str], [isSingleLevel])](#crux.util.readDirectoryRelative)
  * [util.uniqueId(len, [onlyNumbers], [onlyChars], [specialChars])](#crux.util.uniqueId)
  * [util.getFileName(path, true)](#crux.util.getFileName)
  * [util.inspect(obj)](#crux.util.inspect)
  * [util.utcTime([d])](#crux.util.utcTime)
  * [class: util.Parser](#crux.util.Parser)
    * [new util.Parser()](#new_crux.util.Parser)
    * [Parser.parser#read([fn])](#crux.util.Parser.parser#read)
    * [Parser.parser#yml(content)](#crux.util.Parser.parser#yml)
    * [Parser.parser#json(content)](#crux.util.Parser.parser#json)
    * [Parser.parser#js(content)](#crux.util.Parser.parser#js)
  * [class: util.install](#crux.util.install)
    * [new util.install()](#new_crux.util.install)
    * [install.npm(name, fn, isRootPath)](#crux.util.install.npm)

<a name="crux.util.capitalize"></a>
###util.capitalize(str, [replaceUnderline])
Capitalizes the given string. If called with replaceUnderlines, the given string will have all its underlines removed

**Params**

- str `string` - the string to which to apply the capitalization.  
- \[replaceUnderline\] `boolean` - should we remove underlines and camelCase the string  

**Returns**: `string`  
**Example**  
var string = crux.util.capitalize("my_object", true); // => myObject

<a name="crux.util.sha1"></a>
###util.sha1()
Utility function that hashes the given text using SHA1 (128 bits)

**Params**

-  `string` - the string to be hashed  

**Returns**: `string`  
<a name="crux.util.sha2"></a>
###util.sha2()
Utility function that hashes the given text using SHA2 (256 bits)

**Params**

-  `string` - the string to be hashed  

**Returns**: `string`  
<a name="crux.util.minify"></a>
###util.minify()
Wrapper over node-json-minify that strips the given JSON-string of its comments and minifies it. This is useful when parsing a json file that may contain

**Params**

-  `string` - the JSON string that may or may not contain comments and whitespace.  

**Returns**: `any`  
<a name="crux.util.extend"></a>
###util.extend([deepMerge], targetObject, sourceObject)
Performs deep object merging by using node.extend module. It is possible to avoid pass-by-reference cloning by specifying

**Params**

- \[deepMerge\] `boolean` - if specified, the given objects will be deeply merged and avoid pass-by-reference cloning.  
- targetObject `object` - the target object used to copy the properties to  
- sourceObject `object` - the source object used to copy the properties from  

<a name="crux.util.readDirectory"></a>
###util.readDirectory(path, [extension], [str], [isSingleLevel])
Recursively reads the contents of a given folder path and returns an array with file paths.

**Params**

- path `string` - the full directory path  
- \[extension\] `string` - if specified, the function will only return files matching the given extension.
- \[str\] `array` - if present, the files will be appended to this array.  
- \[isSingleLevel\] `boolean` - should it read only files from the root directory. Defaults to false  

**Returns**: `array`  
<a name="crux.util.readDirectoryRelative"></a>
###util.readDirectoryRelative(path, [extension], [str], [isSingleLevel])
Utility function that has the same functionality as readDirectory, but the files in the resulting array will have

**Params**

- path `string` - the full directory path  
- \[extension\] `string` - if specified, the function will only return files matching the given extension.
- \[str\] `array` - if present, the files will be appended to this array.  
- \[isSingleLevel\] `boolean` - should it read only files from the root directory. Defaults to false  

**Returns**: `array`  
<a name="crux.util.uniqueId"></a>
###util.uniqueId(len, [onlyNumbers], [onlyChars], [specialChars])
Utility function that will generate a random key of the given length.

**Params**

- len `number` - the length of the string to generate  
- \[onlyNumbers\] `boolean` - if specified, the resulting will contain only numbers and the resulting string will never start with a 0  
- \[onlyChars\] `boolean` - if specified, the resulting string will contain only alpha characters.  
- \[specialChars\] `boolean` - if specified, the resulting string may contain the following special characters: @$^()_=`!?#^&*()  

**Returns**: `string`  
<a name="crux.util.getFileName"></a>
###util.getFileName(path, true)
Given a full path, it will return the file name, considered to be the last string after the last slash

**Params**

- path `string` - the full path of the file to use.  
- true `boolean` - [withExtension] - if set to false, the file name will be stripped of its extension.  

<a name="crux.util.inspect"></a>
###util.inspect(obj)
Gracefully uses the util.inspect() method on the given object to pretty output the given data

**Params**

- obj `any` - the object to inspect.  

<a name="crux.util.utcTime"></a>
###util.utcTime([d])
Returns the UTC Timestamp of the current date.

**Params**

- \[d\] `date` - if specified, the function will use the given date to extract the UTC time.  

**Returns**: `timestamp`  
<a name="crux.util.Parser"></a>
###class: util.Parser
**Members**

* [class: util.Parser](#crux.util.Parser)
  * [new util.Parser()](#new_crux.util.Parser)
  * [Parser.parser#read([fn])](#crux.util.Parser.parser#read)
  * [Parser.parser#yml(content)](#crux.util.Parser.parser#yml)
  * [Parser.parser#json(content)](#crux.util.Parser.parser#json)
  * [Parser.parser#js(content)](#crux.util.Parser.parser#js)

<a name="new_crux.util.Parser"></a>
####new util.Parser()
It will load up the given file name and, based on its extension, it will parse it accordingly.<br>

<a name="crux.util.Parser.parser#read"></a>
####Parser.parser#read([fn])
This will try and read the file, returning the result. If we have a callback in the arguments,

**Params**

- \[fn\] `function` - the callback function to pass when loading asynchronously. If not specified, the file will be parsed synchronously.  

<a name="crux.util.Parser.parser#yml"></a>
####Parser.parser#yml(content)
Parses the given content as yml-content.

**Params**

- content `string` - the yml content to be parsed  

<a name="crux.util.Parser.parser#json"></a>
####Parser.parser#json(content)
Parses the given content as JSON

**Params**

- content `string` - the json content to be parsed.  

<a name="crux.util.Parser.parser#js"></a>
####Parser.parser#js(content)
Parses the given content as a js file.<br>

**Params**

- content `string` - the javaScript content of the file to be eval'd  

<a name="crux.util.install"></a>
###class: util.install
**Members**

* [class: util.install](#crux.util.install)
  * [new util.install()](#new_crux.util.install)
  * [install.npm(name, fn, isRootPath)](#crux.util.install.npm)

<a name="new_crux.util.install"></a>
####new util.install()
Custom installer that will install the given npm module and calls back with success or not.

<a name="crux.util.install.npm"></a>
####install.npm(name, fn, isRootPath)
Installs the given npm module name.

**Params**

- name `string` - the npm module name  
- fn `function` - the callback function to call after the module is installed  
- isRootPath `boolean` - if specified, we will use the project's root path in stead of crux's path  

<a name="crux.Service"></a>
##class: crux.Service
**Extends**: `crux.Component`  
**Members**

* [class: crux.Service](#crux.Service)
  * [new crux.Service()](#new_crux.Service)
  * [service.init(config)](#crux.Service#init)
  * [service.run(done)](#crux.Service#run)

<a name="new_crux.Service"></a>
###new crux.Service()
The Crux Service component allows the definition of services under a separate folder, and auto-loading them at runtime.<br>

**Extends**: `crux.Component`  
**Example**  
// The service folder path is set to app/services

<a name="crux.Service#init"></a>
###service.init(config)
If a service has special functionality that has to be executed along with the service's configuration,

**Params**

- config `Object` - the service configuration object or an empty object  

**Example**  
// This is a configuration example for our upload service, using the .js format

<a name="crux.Service#run"></a>
###service.run(done)
If a function needs to perform asynchronous tasks before it is fully functional, it should override this function,

**Params**

- done `function` - the on complete callback, to resume the application's execution flow.  

<a name="crux.Application"></a>
##class: crux.Application
**Members**

* [class: crux.Application](#crux.Application)
  * [new crux.Application()](#new_crux.Application)
  * [Application.config](#crux.Application.config)
  * [Application.app#path(path)](#crux.Application.app#path)
  * [Application.app#environment([value])](#crux.Application.app#environment)
  * [Application.app#init()](#crux.Application.app#init)
  * [Application.app#component(name)](#crux.Application.app#component)
  * [Application.app#addComponent(component, [config])](#crux.Application.app#addComponent)
  * [Application.app#configureComponent(name, config)](#crux.Application.app#configureComponent)
  * [Application.app#run(callback)](#crux.Application.app#run)

<a name="new_crux.Application"></a>
###new crux.Application()
The main Crux application class, tying up all the information about a crux application. Keep in mind that this is a

<a name="crux.Application.config"></a>
###Application.config
This property contains the configuration object of the application. This is created at runtime when first requested,

**Type**: `object`  
<a name="crux.Application.app#path"></a>
###Application.app#path(path)
The function sets in place the root path of the project under global.__rootdir, and will be used

**Params**

- path `string` - the root directory path of the project.  

<a name="crux.Application.app#environment"></a>
###Application.app#environment([value])
The function acts as both a getter and a setter to the application's environment.

**Params**

- \[value\] `string` - the environment variable to be used by the application.  

**Returns**: `string` | `app`  
<a name="crux.Application.app#init"></a>
###Application.app#init()
This will initialize the application by instantiating all previously-registered components.<br>

<a name="crux.Application.app#component"></a>
###Application.app#component(name)
Once the Crux application has been initialized, it will allow access to instantiated components. This acts as a getter for previously initialized components

**Params**

- name `string` - the component's name we want to get.  

<a name="crux.Application.app#addComponent"></a>
###Application.app#addComponent(component, [config])
The function will manually attach an instance of a crux component to the application. This is useful when we want

**Params**

- component `string` | `component` - the component to be attached to the application. It is either the name of a core crux component or an instance of crux.component  
- \[config\] `object` - the configuration object to pass to the component when initializing it.  

**Example**  
var app = crux.app();

<a name="crux.Application.app#configureComponent"></a>
###Application.app#configureComponent(name, config)
The function will configure and overwrite a previously-registered component's settings. This is useful when having conditional

**Params**

- name `string` - the previously registered component name  
- config `object` - the configuration object to pass.  

<a name="crux.Application.app#run"></a>
###Application.app#run(callback)
The function will start the crux application. It does so by initializing (if init() was not previously called) and running

**Params**

- callback `function` - the callback function to be called when all components are initialized and executed.  

<a name="crux.Component"></a>
##class: crux.Component
**Extends**: `events.EventEmitter`  
**Members**

* [class: crux.Component](#crux.Component)
  * [new crux.Component()](#new_crux.Component)
  * [Component.__configuration](#crux.Component.__configuration)
  * [Component.component#extendConfig(options)](#crux.Component.component#extendConfig)
  * [Component.component#run(callback)](#crux.Component.component#run)
  * [Component.component#init()](#crux.Component.component#init)
  * [Component.component#stop()](#crux.Component.component#stop)
  * [Component.component#get()](#crux.Component.component#get)
  * [Component.component#requirements()](#crux.Component.component#requirements)
  * [Component.component#packages()](#crux.Component.component#packages)
  * [Component.component#attach(methodName, methodFn)](#crux.Component.component#attach)

<a name="new_crux.Component"></a>
###new crux.Component()
This is the basic class of a Crux component. Components can be used throughout the

**Extends**: `events.EventEmitter`  
<a name="crux.Component.__configuration"></a>
###Component.__configuration
When a component would like to enforce configuration settings on the developer, the __configuration property

**Type**: `boolean`  
<a name="crux.Component.component#extendConfig"></a>
###Component.component#extendConfig(options)
Extends the given options with the component's default values

**Params**

- options `object` - the options object that will be used to extend the component's default configuration  

<a name="crux.Component.component#run"></a>
###Component.component#run(callback)
This function is called when the component is initialized. It should be OVERRIDDEN by

**Params**

- callback `function` - the callback to be called when the component has finished loading.  

<a name="crux.Component.component#init"></a>
###Component.component#init()
This is the second function that is called in the creation cycle of a component.<br>

<a name="crux.Component.component#stop"></a>
###Component.component#stop()
This will be executed when we want to stop a component. Again, this should be overridden by

<a name="crux.Component.component#get"></a>
###Component.component#get()
This function is called whenever somebody tries to call registry.get() on a component.

**Returns**: [Component](#crux.Component)  
<a name="crux.Component.component#requirements"></a>
###Component.component#requirements()
A component can be configured to have other components as dependencies, to be loaded prior to the

**Returns**: `Array.<string>`  
<a name="crux.Component.component#packages"></a>
###Component.component#packages()
Each component can define its individual npm package requirements to be installed, before

**Returns**: `Array.<string>`  
<a name="crux.Component.component#attach"></a>
###Component.component#attach(methodName, methodFn)
Because we want each component to be aware of other components, we need an injection system, capable

**Params**

- methodName `string` - the method we want to attach to a component  
- methodFn `function` - the function that will be called after attaching.  

<a name="crux.Registry"></a>
##class: crux.Registry
**Members**

* [class: crux.Registry](#crux.Registry)
  * [new crux.Registry()](#new_crux.Registry)
  * [Registry.registry#register(component)](#crux.Registry.registry#register)
  * [Registry.registry#has(name)](#crux.Registry.registry#has)
  * [Registry.registry#get(name)](#crux.Registry.registry#get)
  * [Registry.registry#attachTo(component, functionName, callback)](#crux.Registry.registry#attachTo)
  * [Registry.registry#run(name, callback)](#crux.Registry.registry#run)
  * [Registry.registry#checkDependency(component, callback)](#crux.Registry.registry#checkDependency)
  * [Registry.registry#initialize(callback)](#crux.Registry.registry#initialize)

<a name="new_crux.Registry"></a>
###new crux.Registry()
This is the Crux component registry. It acts as a repository for all loaded components and

<a name="crux.Registry.registry#register"></a>
###Registry.registry#register(component)
Registers a component with the registry. At this point, the component is only instantiated but not initialized.

**Params**

- component <code>[Component](#crux.Component)</code> - the component instance to add to the registry.  

<a name="crux.Registry.registry#has"></a>
###Registry.registry#has(name)
Checks if the registry contains a given component

**Params**

- name `string` - the component name  

**Returns**: `boolean`  
<a name="crux.Registry.registry#get"></a>
###Registry.registry#get(name)
Returns a loaded component by its name.

**Params**

- name `string` - the component name  

**Returns**: [Component](#crux.Component)  
<a name="crux.Registry.registry#attachTo"></a>
###Registry.registry#attachTo(component, functionName, callback)
This method can and should be used to attach specific functionality from one component

**Params**

- component `string` | <code>[Array.&lt;Component&gt;](#crux.Component)</code> - the name of the component (either as an array or as a string delimited by space)  
- functionName `string` - the function name we want to pass to the component's internal attach()  
- callback `function` - the function callback to be attached to the component under functionName.  

<a name="crux.Registry.registry#run"></a>
###Registry.registry#run(name, callback)
This will try to run a single previously registered component and call the callback when ready.<br>

**Params**

- name `string` - the component name to run.  
- callback `function` - the callback function to call after running it.  

<a name="crux.Registry.registry#checkDependency"></a>
###Registry.registry#checkDependency(component, callback)
Checks the required dependency list of a given component.

**Params**

- component <code>[Component](#crux.Component)</code> - the component to check the dependency against  
- callback `function` - the callback function to be called after checking.  

<a name="crux.Registry.registry#initialize"></a>
###Registry.registry#initialize(callback)
This will start up and initialize the registry and all its components. <br>

**Params**

- callback `function` - the callback function to be called after the registry has initialized all its components.  

<a name="__rootdir"></a>
#__rootdir
The project's root full path

<a name="_"></a>
#_
The popular utility module underscore (LoDash) has been conveniently loaded and globalized, to be accessible

<a name="log"></a>
#log
Crux comes with a built-in logger component, that uses log4js to achieve its logging. By default, it is placed under

<a name="RedisTransaction"></a>
#type: RedisTransaction
**Properties**

- queue() `function` - Queues the given operation. Same arguments as exec()  
- commit() `function` - Commits the transaction, returning a promise.  

**Type**: `Object`  