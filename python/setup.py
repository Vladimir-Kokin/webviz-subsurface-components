# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.
#
# Copyright (C) 2020 - Equinor ASA.

import os
import json
from setuptools import setup


with open("README.md", "r", encoding="utf8") as fh:
    long_description = fh.read()

INSTALL_REQUIRES = [
    "dash>=2.0",
    "numpy>=1.14",
    "pandas>=1.0",
]

TESTS_REQUIRE = [
    "bandit",
    "black>=20.8b1",
    "dash[testing]",
    "geojson>=2.5.0",
    "jsonpatch>=1.32",
    "jsonpointer>=2.1",
    "matplotlib>=3.0",
    "orjson>=3.8.2",
    "Pillow>=6.0",
    "pylint>=2.4",
    "scipy>=1.2",
    "selenium>=3.141.0,<=4.2.0",
    "vtk>=9.2.2",
    "webviz-core-components>=0.6.0",
    "xtgeo>=2.20.3",
]

setup(
    name="webviz-subsurface-components",
    author="Equinor <opensource@equinor.com>",
    packages=["webviz_subsurface_components"],
    include_package_data=True,
    license="MPL-2.0",
    description="Custom Dash subsurface components",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/equinor/webviz-subsurface-components",
    install_requires=INSTALL_REQUIRES,
    tests_require=TESTS_REQUIRE,
    extras_require={"tests": TESTS_REQUIRE, "dependencies": INSTALL_REQUIRES},
    setup_requires=["setuptools_scm~=7.0"],
    python_requires="~=3.8",
    use_scm_version={"root": ".."},
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
        "Natural Language :: English",
        "Environment :: Web Environment",
        "Framework :: Dash",
        "Framework :: Flask",
        "Topic :: Multimedia :: Graphics",
        "Topic :: Scientific/Engineering",
        "Topic :: Scientific/Engineering :: Visualization",
        "License :: OSI Approved :: Mozilla Public License 2.0 (MPL 2.0)",
    ],
)
