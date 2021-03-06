copy /Y Dockerfile ..\..\Dockerfile
copy /Y crete-image.cmd ..\..\crete-image.cmd

cd ..\..
.\crete-image.cmd

cd ..\..

del Dockerfile
del crete-image.cmd