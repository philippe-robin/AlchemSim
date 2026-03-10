"""Pydantic schemas for geometry endpoints."""

from __future__ import annotations

import uuid
from datetime import datetime
from typing import Any

from pydantic import BaseModel, Field

from app.models.geometry import GeometryFormat


class PrimitiveCreate(BaseModel):
    """Request body for generating a primitive geometry via Gmsh."""

    simulation_id: uuid.UUID
    type: str = Field(
        description="Primitive type: box, cylinder, sphere, or tube",
        pattern=r"^(box|cylinder|sphere|tube)$",
    )
    params: dict[str, Any] = Field(
        description="Primitive-specific parameters (e.g. width, height, radius, ...)"
    )


class GeometryResponse(BaseModel):
    id: uuid.UUID
    simulation_id: uuid.UUID
    format: GeometryFormat
    file_key: str | None
    file_size_bytes: int | None
    bounding_box: dict | None
    face_count: int | None
    primitive_config: dict | None
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}
