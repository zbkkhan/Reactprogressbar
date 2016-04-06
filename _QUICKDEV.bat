:; echo "Hi, I’m ${SHELL}."; exit $?
:; echo "Shell code can go here"; exit $?

@echo off

START "Webpack" cmd.exe /k 	    "cd %~dp0 & webpack --progress --colors --watch"
START "Git Bash" /D 		    %~dp0 "C:\Program Files\Git\bin\sh.exe" --login -i