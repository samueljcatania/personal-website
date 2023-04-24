import {useEffect} from 'react'

function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
            resolve(img)
        }
        img.onerror = img.onabort = function () {
            reject(src)
        }
        img.src = src
    })
}

function useImagePreloader(imageList) {
    useEffect(() => {
        let isCancelled = false

        async function effect() {
            if (isCancelled) {
                return
            }

            const imagesPromiseList = []
            for (const i of imageList) {
                imagesPromiseList.push(preloadImage(i))
            }

            await Promise.all(imagesPromiseList)
        }

        effect().then()

        return () => {
            isCancelled = true
        }
    }, [imageList])
}

export default useImagePreloader;
