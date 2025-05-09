# Pop & Roll - 3D Beverage Visualization Platform

![Project Banner](./assets/banner.jpg)

A web-based 3D visualization suite for beverage packaging design, featuring interactive product models and brand-consistent UI components.

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Three.js v128](https://img.shields.io/badge/Three.js-128.0-000000.svg)](https://threejs.org/)
![Blender 3.4+](https://img.shields.io/badge/Blender-3.4+-orange.svg)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Design Specifications](#design-specifications)
- [License](#license)
- [Contact](#contact)

## Features
- Interactive 3D viewer with orbit controls
- Multi-model presentation system
- Real-time wireframe visualization
- Brand-consistent UI/UX design
- Responsive cross-device compatibility
- Optimized WebGL rendering pipeline

## Installation

### Requirements
- Node.js 16.x+ (recommended)
- Modern web browser with WebGL 2.0 support

### Quick Start
```bash
# Clone repository
git clone https://github.com/AbdulRahmanMudasser/three-js-blender-beverages.git

# Navigate to project directory
cd three-js-blender-beverages

# Install dependencies (optional)
npm install --global live-server

# Launch development server
live-server --port=8000
Access the application at: http://localhost:8000

Technical Stack
Component	Technology
3D Rendering	Three.js r128 (WebGL 2.0)
3D Modeling	Blender 3.4+
Graphic Design	CorelDRAW 2023
Asset Format	GLTF 2.0 Binary
Frontend Framework	Vanilla ES6
Style System	CSS3 Custom Properties
Project Structure
three-js-blender-beverages/
├── base_model/
│   ├── beverage_base.blend
│   └── topology_variants/
├── models/
│   ├── cola.glb
│   ├── orange.glb
│   └── lemon.glb
├── scripts/
│   ├── main.js
│   └── navigation.js
├── styles/
│   ├── base/
│   └── main.css
├── textures/
│   ├── metallic_roughness/
│   └── normal_maps/
├── unwrap/
│   └── uv_templates/
└── index.html
Usage
Viewer Controls
Left Click + Drag: Rotate model

Mouse Wheel: Zoom in/out

Right Click + Drag: Pan view

Touch Gestures: Supported on mobile devices

UI Functions
javascript
// Toggle wireframe mode
function toggleWireframe() {
  model.material.wireframe = !model.material.wireframe;
}

// Enable auto-rotation
function toggleRotation() {
  sceneSettings.autoRotate = !sceneSettings.autoRotate;
}
Design Specifications
Visual System
Color Palette

Primary: #00B4D8 (Azure)

Secondary: #2D3436 (Charcoal)

Accent: #C0FF91 (Lime)

Typography

Primary: Roboto (Body)

Headings: Fredoka (Display)

Performance
Model Load Time: <1.5s (4G connection)

FPS Target: 60fps @ 1080p

Memory Usage: <200MB VRAM

License
Distributed under the MIT License. See LICENSE file for details.

Contact
Development Team
Abdul Rahman Mudasser

Email: contact@example.com

GitHub: AbdulRahmanMudasser

Technical Support
Open Issue