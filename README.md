# Stage Whisper
The main repo for Stage Whisper, our easy to use AI transcriber, powered by OpenAI's Whisper

## Usage

Currently Stage Whisper is not ready to be installed and used by the public. It's still under heavy development. We are moving to have a working, minimal version as soon as possible.

## Contributing

### Quickstart

1. Ensure [Poetry](https://python-poetry.org/) is installed
2. Clone this repository to your development machine
3. From inside this repository:

   ```sh
   poetry install  # Required for first run only
   poetry run stagewhisper  # Launches the GUI application
   ```

### Building an executable

We're using [PyInstaller](https://pyinstaller.org/en/stable/index.html) to bundle Stage Whisper into an executable. PyInstaller allows you to bundle in either:

* **Single-folder mode:** All files are bundled into a single folder. You can run the application by running the `dist/stagewhisper/stagewhisper` executable. This mode is more appropriate for development as it is quicker to build and easier to debug.
* **Single-file mode:** All files are bundled into a single executable. You can run the application by running the `dist/stagewhisper` executable (it may have an extension depending on your OS). This mode is more appropriate for distribution.

To build in **single-folder mode**:

```sh
poetry run pyinstaller stagewhisper.spec
```

To build in **single-file mode**:

```sh
poetry run pyinstaller --onefile --windowed stagewhisper.spec
```

A useful shortcut while making changes to `stagewhisper.spec` is this command to build and run:

```sh
poetry run pyinstaller stagewhisper.spec --noconfirm && ./dist/stagewhisper/stagewhisper
```

#### Bundling for Mac

Unfortunately bundling with either method for Mac appears to be extremely wonky. After reading [this thread](https://github.com/chriskiehl/Gooey/issues/259), I've come up with the following process that works:

```sh
poetry run pyinstaller stagewhisper.spec
mkdir dist/stagewhisper/Contents
```

From there you can run the executable (no, I have no idea why creating an empty `Contents` folder makes it work):

```sh
./dist/stagewhisper/stagewhisper
```

or rename the directory to turn it into a bundled application:

```sh
mv dist/stagewhisper dist/stagewhisper.app
```

## About the Project

### Goal

[OpenAI](https://openai.com/blog/whisper/) recently released [Whisper](https://github.com/openai/whisper), its automatic speech recognition (ASR) system that is trained on "680,000 hours of multilingual and multitask supervised data collected from the web." You can learn more by [reading the paper](https://cdn.openai.com/papers/whisper.pdf) [PDF] or looking at the [examples](https://openai.com/blog/whisper/) on OpenAI's website.

As Dan Nguyen [noted on Twitter](https://twitter.com/dancow/status/1572749731704573957), this could be a "godsend for newsrooms."

The only problem, as [@PeterSterne](https://github.com/petersterne) pointed out, is that not all journalists (or others who could benefit from this type of transcription tool) are comfortable with the command line and installing the dependecies requried to run Whisper.

Our goal is to package Whisper in an easier to use way so that less technical users can take advantage of this neural net.

Peter came up with the project name, Stage Whisper.

### Who is involved

[@PeterSterne](https://github.com/petersterne) and [@filmgirl](https://github.com/filmgirl) (Christina Warren) created the project, and [@HarrisLapiroff](https://github.com/harrislapiroff) and [@Crazy4Pi314](https://github.com/crazy4pi314) (Sarah Kaiser) are leading the development. We'd love to collaborate with anyone who has ideas about how we could more easily package Whisper and make it easy to use for non-technical users.

### Project Status

The project is still in the planning stages (again, contributors are welcome), but we hope to move quickly to getting some sort of MVP available. For the first version of Stage Whisper, we are working to create a simple GUI interface with [Gooey](https://github.com/chriskiehl/Gooey/) and then package it into binaries that can be downloaded on Windows and MacOS. For subsequent versions of Stage Whisper, though, we are considering alternatives to Gooey, including an Electron app.     

- [Request features or ask questions](https://github.com/Stage-Whisper/Stage-Whisper/discussions) on the project discussions on GitHub.
- Find a bug? [Open an issue](https://github.com/Stage-Whisper/Stage-Whisper/issues/choose) so that we can see how we can fix it.
- Want to contribute? Check out our good first issues and check out our [contributing guide](https://github.com/Stage-Whisper/Stage-Whisper/contribute).
- [Join our Discord server](https://discord.gg/rcKtzTsA) to discuss the project's planning and development.

### License

Any code that we distribute will be open sourced and follow the license terms of any of the projects that we are using. Whisper is MIT licensed, but some of its dependencies (FFmpeg) are licensed under different terms. We will be sure to adhere to any/all licensing terms and in the event that we cannot bundle ffmpeg with Stage Whisper, we will make it as easy to obtain as possible for the end-user. Any Stage Whisper-specific code will be licensed under the MIT license.
