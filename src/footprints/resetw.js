module.exports = {
    nets: {
        r1: 'r1',
        r2: 'r2'
    },
    params: {
        class: 'S', 
    },
    body: p => {
	    const standard = `
		(footprint "kbd:ResetSW" (layer "F.Cu")
    (tedit 62C54C3D) (tstamp 33086112-67f9-4e70-bc8f-c5eff1e5957e)
	${p.at /* parametric position */}
    
    (attr through_hole)
    (fp_text reference "RSW1" (at 0.265 0.73 90) (layer "F.SilkS") hide
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp 1807c891-5ccf-491b-b7cb-6605d0030f30)
    )
    (fp_text value "Reset" (at 0 0 90) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp 115c2483-0d3d-4658-9c56-55683456b2f9)
    )
    (fp_text user "Reset" (at 0.127 0 90) (layer "B.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      (tstamp 3a43f2ef-4839-435a-bede-c90252339a51)
    )
    (fp_line (start -3 -1.5) (end -3 -1.75) (layer "B.SilkS") (width 0.15) (tstamp 584970dc-5538-419b-b998-8d8d4ada798f))
    (fp_line (start -3 1.75) (end -3 1.5) (layer "B.SilkS") (width 0.15) (tstamp 825fbe04-7d0f-48c0-b196-0082d6b05859))
    (fp_line (start 3 -1.75) (end 3 -1.5) (layer "B.SilkS") (width 0.15) (tstamp 85ce4d4c-d093-4323-9a04-70d33e2d6c7e))
    (fp_line (start 3 1.5) (end 3 1.75) (layer "B.SilkS") (width 0.15) (tstamp 9c81b9e4-c3e8-4c27-acdb-80b385e836a7))
    (fp_line (start 3 1.75) (end -3 1.75) (layer "B.SilkS") (width 0.15) (tstamp 9e72b1b6-3005-465f-b29c-9fb2358144c7))
    (fp_line (start -3 -1.75) (end 3 -1.75) (layer "B.SilkS") (width 0.15) (tstamp accfea22-0220-4bfc-bc57-88d0ba04c651))
    (fp_line (start 3 -1.75) (end 3 -1.5) (layer "F.SilkS") (width 0.15) (tstamp 133e4738-5308-4c8f-a278-ff3a4b573a42))
    (fp_line (start -3 -1.75) (end -3 -1.5) (layer "F.SilkS") (width 0.15) (tstamp 3472ac51-2496-4774-b525-ca48b4eac389))
    (fp_line (start -3 -1.75) (end 3 -1.75) (layer "F.SilkS") (width 0.15) (tstamp 6bcc4470-6fe4-4c8d-ba29-7eeb8005d7fa))
    (fp_line (start 3 1.75) (end 3 1.5) (layer "F.SilkS") (width 0.15) (tstamp 8d2043d0-1e2a-47a8-b40c-1d3c6b8242cf))
    (fp_line (start -3 1.75) (end 3 1.75) (layer "F.SilkS") (width 0.15) (tstamp d916b305-a832-4de9-944b-164deaf38300))
    (fp_line (start -3 1.75) (end -3 1.5) (layer "F.SilkS") (width 0.15) (tstamp f69e205d-71f1-4bed-8e46-d37fa1b7672f))
    (pad "1" thru_hole circle locked (at 3.25 0 90) (size 2 2) (drill 1.3) (layers *.Cu *.Mask "F.SilkS")
      ${p.net.r1.str} (tstamp ce81dad1-984f-418b-94c3-c50892ce4eaf))
    (pad "2" thru_hole circle locked (at -3.25 0 90) (size 2 2) (drill 1.3) (layers *.Cu *.Mask "F.SilkS")
	  ${p.net.r2.str} (tstamp 32152384-5f30-4790-a5a7-40a77da6c53b))
  )
	
	      `
	    return standard
	}
}
