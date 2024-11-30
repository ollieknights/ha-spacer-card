# Spacer Card for Home Assistant

A simple custom card for Home Assistant that adds vertical spacing to your dashboard.

## Installation

### HACS (Recommended)
1. Open HACS
2. Click on "Frontend"
3. Click the "+" button
4. Search for "Spacer Card"
5. Click "Install"

### Manual Installation
1. Download `spacer-card.js`
2. Copy it to your `config/www` folder
3. Add a reference to `spacer-card.js` in your dashboard resources:
```yaml
resources:
  - url: /local/spacer-card.js
    type: module
```

## Usage

Add the card to your dashboard with this configuration:

```yaml
type: custom:spacer-card
height: 20px  # Optional, defaults to 10px
```

## Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| height | string | 10px | Height of the spacer |

## Examples

Basic usage:
```yaml
type: custom:spacer-card
```

Custom height:
```yaml
type: custom:spacer-card
height: 30px
```