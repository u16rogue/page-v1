<!--
{
  "id": "podman-containers-as-a-sandbox",
  "title": "Podman Containers as a Sandbox",
  "description": "A quick rundown of using podman containers as a sandbox.",
  "thumbnail": "https://avatars.githubusercontent.com/u/61908580?v=4",
  "tags": [ "WIP", "containers", "podman", "linux", "guide", "development", "shell" ],
  "stamps": {
    "created": "Sat Oct 26 2024 06:15:23 GMT+0800 (Taipei Standard Time)",
    "added":   "Sat Oct 26 2024 06:15:23 GMT+0800 (Taipei Standard Time)"
  }
}
-->

<!--
 Todo:
    * committing containers
-->

> This is a work in progress (wip)!

This is a quick rundown of using Podman Containers as a sandbox. A lot of guides online are (obviously) geared towards using containers in the context of deployment. This instead is geared towards using Podman Containers as a small sandbox.
<br>
Why? Containers are a great substitute to a full virtual machine when you need an isolated system.

## Obtaining a base OS Image
You can choose anything you want. Check [Docker Hub](https://hub.docker.com/) for your preffered image. We'll be using `alpine` as its very small.

    - `podman pull alpine`

## Checking Images
To see what images you have installed. These images is where your containers will begin from.

    - `podman images -a`

## Creating a disposable sandbox
If you need to do something and do not want to keep the container right after you can set it up to automatically dispose itself on exit.

    - `podman run --rm -it --name sandbox alpine /bin/sh`
        - `--rm` - Removes the container on exit
        - `-it`  - Attach to the container (interactive, tty). This allows us to interact with the shell in the container.
        - `--name sandbox` - Give it a name (optional) but makes it easier to reference.
        - `alpine` - The image name we're using.
        - `/bin/sh` - The command the container will execute. This gives us a shell inside the container.

## Creating a container for a persistent sandbox
If you need a sandbox that you'll continue using after, more akin to a VM use case.

    - `podman create --name sandbox -it docker.io/library/alpine:3.20.3 /bin/sh`
        - `--name sandbox` - Give it a name (optional) but makes it easier to reference. This need to be unique.
        - `-it`  - Attach to the container (interactive, tty). This allows us to interact with the shell in the container.
        - `alpine` - The image name we're using.
        - `/bin/sh` - The command the container will execute. This gives us a shell inside the container.

## Starting a container from a stopped state

    - `podman start -ia sandbox`
        - `-ia` - Attach to the container.
        - `sandbox` - The name given to the container created

## Listing containers

    - `podman ps -a`

## Stopping a container in a running state

    - Exit the shell session you're in.
    - `podman stop sandbox`

## Deleting containers

    - `podman rm sandbox`
