---
layout: post
title: Installing TensorFlow on Ubuntu using Anaconda!
---

### Set of commands that worked for me
- Ubuntu 14.04 
- I had Anaconda already installed before now.

```
$ conda create -n tensorflow python=2.7
$ source activate tensorflow
$ # Ubuntu/Linux 64-bit, CPU only, Python 2.7
(tensorflow)$ export TF_BINARY_URL=https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.10.0-cp27-none-linux_x86_64.whl
(tensorflow)$ pip install --ignore-installed --upgrade $TF_BINARY_URL
$ source deactivate
$ export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/cuda/lib64:/usr/local/cuda/extras/CUPTI/lib64"
$ export CUDA_HOME=/usr/local/cuda
$ source activate tensorflow
(tensorflow)$ # Testing if it works
(tensorflow)$ python
>>> import tensorflow as tf
>>> hello = tf.constant('Hello, TensorFlow!')
>>> sess = tf.Session()
>>> print(sess.run(hello))
Hello, TensorFlow!
>>> a = tf.constant(10)
>>> b = tf.constant(32)
>>> print(sess.run(a + b))
42
